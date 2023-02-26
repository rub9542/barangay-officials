import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData, putData } from "../../api";
import { useNavigate } from "react-router-dom";
import Add from "./Add";

// import Status from "./Status";
// import View from "./View";
// import Manage from "./Manage";
import { Link } from "react-router-dom";
const DataReviewer = () => {
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizeperPage] = useState(10);
  const [totalSize, setTotalSize] = useState(0);
  const [userList, setUserList] = useState([]);
  const [rowData, setRowData] = useState({
    profile: {
      dob: "",
      gender: "",
      id: "",
      official_number: "",
      phone_no: "",
      user_id: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [isModal, setModal] = useState({ show: false, type: "" });

  const navigate = useNavigate();

  useEffect(() => {
    getDataReviewerList();
  }, []);
  const onEdit = (row) => {
    setModal({ show: true, type: "edit" });
    setRowData(row);
  };
  const actionButton = (cell, row) => {
    return (
      <>
        <div className="action-buttons">
          <button className="btn btn-link me-3" onClick={() => onEdit(row)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-link me-3 ">
            {row.is_active === 1 ? (
              <i className="fa fa-toggle-on"></i>
            ) : (
              <i className="fa fa-toggle-off"></i>
            )}
          </button>
          <button
            className="btn btn-link "
            onClick={() => getUserSetting(row.id)}
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </button>
        </div>
      </>
    );
  };

  const columns = [
    {
      dataField: "sl.no",
      text: "S.no",
      headerStyle: { width: "8%", textAlign: "left" },
      style: { textAlign: "left" },
      formatter: (cell, row, rowIndex, formatExtraData) => {
        return rowIndex + 1;
      },
    },
    {
      dataField: "first_name",
      text: "Users",
      headerStyle: { width: "15%", textAlign: "left" },
      style: { textAlign: "left" },
    },
    {
      dataField: "barangay.first_name",
      text: "Barangay Name",
      headerStyle: { width: "15%", textAlign: "left" },
      style: { textAlign: "left" },
      //   formatter: PhoneNumber,
    },
    {
      dataField: "profile.official_number",
      text: "ID Number",
      headerStyle: { width: "20%", textAlign: "left" },
      style: { textAlign: "left" },
    },
    {
      dataField: "email",
      text: "Email ID",
      headerStyle: { width: "25%", textAlign: "left" },
      style: { textAlign: "left" },
    },
    {
      dataField: "action",
      text: "Action",
      formatter: actionButton,
    },
  ];
  const onFilter = (page, sizePerPage, search) => {
    setPage(page);
    setSizeperPage(sizePerPage);
    // getUsetList(page, sizePerPage, search);
  };
  const getDataReviewerList = async (page, sizePerPage, search) => {
    setLoading(true);
    let obj = {
      page: 1,
      page_size: 10,
      search: "",
    };
    try {
      const getData1 = await postData("list-data-reviewer/", {}, obj);
      if (getData1 && getData1.status === 1) {
        setUserList(getData1.data);
        setTotalSize(getData1.paginator.total_records);
        setLoading(false);
      }
    } catch (err) {}
  };
  const getUserSetting = async (id) => {
    // const res = await getData(`view-data-reviewer/${id}/`, {});
    // if (res.status === 1) {
    navigate(`/data-reviewer/view/${id}`);
  };
  const closeModal = () => {
    setModal({ show: false, type: "" });
    setRowData({
      profile: {
        dob: "",
        gender: "",
        id: "",
        official_number: "",
        phone_no: "",
        user_id: "",
      },
    });
  };
  const callApi = async(data)=>{    
    if (isModal.type === "edit") {
      var date = new Date(data.profile.dob),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    // let data = "2018-12-12T00:00:00".split("T")[0];
    data.profile.dob=[date.getFullYear(), mnth, day].join("-");
      try {
        const res = await putData(
          "data-reviewer-update/34FC5FB6-4CB8-4955-97E2-318F82D0C1B5/",
          {},
          data
        );
        if (res.status === 1) {
          closeModal()
        }else{
          alert(res.message)

        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await postData("create-datareviewer/", {}, data);
        
        if (res.status === 1) {
          closeModal()

        }else{
          alert(res.message)

        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="data-reviewer-div">
      <h4 className="page_title">Data Reviewer</h4>
      <ServerSideTable
        columns={columns}
        data={userList}
        page={page}
        sizePerPage={sizePerPage}
        totalSize={totalSize}
        onFilter={onFilter}
        loading={loading}
      >
        <div className="action-group text-end">
          <select className="form-select form-control form-control-lg d-inline-block me-3 custom_select">
            <option value="1"> option</option>
          </select>
          {/* <Link
            to="/users/inviteStatus"
            className="btn f-14 fw-600 btn-sm text-white btn-primary me-4"
          >
            Invite Status
          </Link> */}
          <button
            className="btn f-14 fw-600 btn-sm text-white btn-primary"
            onClick={() => setModal({ show: true, type: "add" })}
          >
            Add
          </button>
        </div>
      </ServerSideTable>
      {/* {AddUserShowModal && ( */}
      <Add
        show={isModal.show}
        rowData={rowData}
        type={isModal.type}
        submit={callApi}
        onClose={() => closeModal()}
      />
      {/* )} */}
    </div>
  );
};

export default DataReviewer;

import React, { useState,useEffect } from "react";
import Button from "../../components/Form/Button";
import ServerSideTable from "../../components/ServerSideTable";
import Add from "./Add";
import {postData} from "../../api";
const Barangay = () => {
  const [addShowModal, setAddShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizeperPage] = useState(10);
  const [totalSize, setTotalSize] = useState(0);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const addClick = () => {
    setAddShowModal(true);
  };
  //View barangay page
  const ViewClick = (row) => {
    console.log(row);
  };
  // edit barangay
  const EditClick=(row)=>{
    console.log(row)
  };
  // delete barangay
  const DeleteClick=(row)=>{
    console.log(row)
  };
  const actionButton = (cell, row) => {
    return (
      <>
        <div className="action-buttons">
          <button className="btn btn-link me-3"  onClick={() => EditClick(row)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-link me-3"  onClick={() => DeleteClick(row)}>
          <i className="fa fa-solid fa-trash"></i>
          </button>
          <button className="btn btn-link " onClick={() => ViewClick(row)}>
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
      formatter: (cell, row, rowIndex, formatExtraData) => {
        return rowIndex + 1;
      },
      headerStyle: { width: "8%", textAlign: "left" },
      style:{ textAlign: "center" }
    },
    {
      dataField: "first_name",
      text: "Name",
      headerStyle: { width: "15%", textAlign: "left" },
      style:{ textAlign: "center" }
    },
    {
      dataField: "location.name",
      text: "Location Managed",
      headerStyle: { width: "15%", textAlign: "left" },
      style:{ textAlign: "center" },
    //   formatter: PhoneNumber,
    },
    {
      dataField: "profile.official_number",
      text: "ID Number",
      headerStyle: { width: "20%", textAlign: "left" },
      style:{ textAlign: "center" }
    },
    {
        dataField: "email",
        text: "Email ID",
        headerStyle: { width: "25%", textAlign: "left" },
        style:{ textAlign: "center" }
    },
    {
      dataField:'profile.phone_no',
      text:"Phone Number",
      headerStyle: { width: "25%", textAlign: "left" },
      style:{ textAlign: "center" }
    },
    {
        dataField: "action",
        text: "Action",
        formatter: actionButton,
      }
  ];
  const getBarangayList = async (page, sizePerPage, search) => {
    setLoading(true);
    let obj = {
      page:page,
      page_size:sizePerPage,
      search: search
    };
    try {
        const getData = await postData("list-barangay/", {}, obj);
        console.log(getData)
        if (getData && getData.status === 1) {
            setUserList(getData.data);
            setTotalSize(getData.paginator.total_records);
            setLoading(false);
        }
    } catch (err) { }
};
  const onFilter = (page, sizePerPage, search) => {
    setPage(page);
    setSizeperPage(sizePerPage);
    // getUsetList(page, sizePerPage, search);
  };
  const addShowModalClose = () => {
    setAddShowModal(false);
  };
  useEffect(() => {
    getBarangayList(page, sizePerPage, "");
  }, []);
  return (
    <React.Fragment>
      <div>
        {/* <Button className="btn-primary" onClick={addClick}>
          Add
        </Button> */}
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
           
          {/* <Link
            to="/users/inviteStatus"
            className="btn f-14 fw-600 btn-sm text-white btn-primary me-4"
          >
            Invite Status
          </Link> */}
          <Button
            className="btn f-14 fw-600 btn-sm text-white btn-primary"
            onClick={addClick}
          >
            Add
          </Button>
        </div>
      </ServerSideTable>
      </div>
      {addShowModal && <Add show={addShowModal} onClose={addShowModalClose} />}
    </React.Fragment>
  );
};

export default Barangay;

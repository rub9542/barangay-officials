import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData } from "../../api";
//scss
import "./style.scss";
import AddUser from "./AddUser";
// import Status from "./Status";
// import View from "./View";
// import Manage from "./Manage";
import { Link } from "react-router-dom";
const Users = () => {
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizeperPage] = useState(10);
  const [totalSize, setTotalSize] = useState(0);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [AddUserShowModal, setAddUserShowModal] = useState(false);

  const [singleUser, setSingleUser] = useState(null);
  const [statusShowModal, setStatusShowModal] = useState(false);
  const [viewShowModal, setViewShowModal] = useState(false);
  const [addShowModal, setAddShowModal] = useState(false);

  const actionButton = (cell, row) => {
    return (
      <>
        <div className="action-buttons">
          <button className="btn btn-link me-3" onClick={() => EditClick(row)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-link " onClick={() => statusClick(row)}>
            {row.is_active === 1 ? (
              <i className="fa fa-toggle-on"></i>
            ) : (
              <i className="fa fa-toggle-off"></i>
            )}
          </button>
        </div>
      </>
    );
  };

  const columns = [
    {
      dataField: "user_name",
      text: "S.no",
      headerStyle: { width: "10%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
      dataField: "name",
      text: "Users",
      headerStyle: { width: "25%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
      dataField: "phone_no",
      text: "Role Assigned",
      headerStyle: { width: "15%", textAlign: "left" },
      style:{ textAlign: "left" },
    //   formatter: PhoneNumber,
    },
    {
      dataField: "email",
      text: "Barangay Assigned",
      headerStyle: { width: "25%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
        dataField: "action",
        text: "Action",
        formatter: actionButton,
      }
  ];
  const getUsetList = async (page, sizePerPage, search) => {
    // setLoading(true);
    // let obj = {
    //   length: sizePerPage,
    //   start: (page - 1) * sizePerPage,
    //   draw: sizePerPage,
    //   role: "user",
    //   search: {
    //     value: search,
    //   },
    // };
    // try {
    //   const getData = await postData("/admin-user-list", {}, obj);
    //   if (getData && getData.status === 1) {
    //     setUserList(getData.data.users);
    //     setTotalSize(getData.data.recordsTotal);
    //     setLoading(false);
    //   }
    // } catch (err) {}
  };
  const onFilter = (page, sizePerPage, search) => {
    setPage(page);
    setSizeperPage(sizePerPage);
    getUsetList(page, sizePerPage, search);
  };
  useEffect(() => {
    getUsetList(page, sizePerPage, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const AddUserClick = () => {
    setAddUserShowModal(true);
  };
  const onAddUserClose = (status) => {
    if (status) getUsetList(page, sizePerPage, "");
    setAddUserShowModal(false);
  };
  const EditClick = (row) => {
    let copyRow = Object.assign({}, row);
    copyRow.profile.dob = new Date(copyRow.profile.dob);
    setSingleUser(row);
    setAddShowModal(true);
  };
  const statusClick = (row) => {
    setSingleUser(row);
    setStatusShowModal(true);
  };
  const onAddClose = (status) => {
    if (status) getUsetList(page, sizePerPage);
    setSingleUser(null);
    setStatusShowModal(false);
    setAddShowModal(false);
  };
  const viewClick = (row) => {
    setSingleUser(row);
    setViewShowModal(true);
  };
  const onViewClose = (status) => {
    if (status) getUsetList(page, sizePerPage);
    setSingleUser(null);
    setViewShowModal(false);
  };
  return (
    <div>
      <h4 className="page_title">Users</h4>
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
            onClick={AddUserClick}
          >
            Add User
          </button>
        </div>
      </ServerSideTable>
      {AddUserShowModal && (
        <AddUser show={AddUserShowModal} onClose={onAddUserClose} />
      )}
      {/* {statusShowModal && (
        <Status
          show={statusShowModal}
          onClose={onAddClose}
          singleUser={singleUser}
        />
      )}
      {viewShowModal && (
        <View
          show={viewShowModal}
          onClose={onViewClose}
          singleUser={singleUser}
        />
      )}
      {addShowModal && (
        <Manage
          show={addShowModal}
          onClose={onAddClose}
          singleUser={singleUser}
        />
      )} */}
    </div>
  );
};

export default Users;

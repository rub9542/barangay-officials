import { useEffect, useState } from "react";
import ServerSideTable from "../../components/ServerSideTable";
import { postData } from "../../api";
import Add from "./Add";

import { Link } from "react-router-dom";
const DataCollector = () => {
    const [addShowModal, setAddShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [sizePerPage, setSizeperPage] = useState(10);
    const [totalSize, setTotalSize] = useState(0);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);


  const actionButton = (cell, row) => {
    return (
      <>
        <div className="action-buttons">
          <button className="btn btn-link me-3" >
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-link ">
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
      headerStyle: { width: "8%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
      dataField: "name",
      text: "Name",
      headerStyle: { width: "15%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
      dataField: "phone_no",
      text: "Barangay Name",
      headerStyle: { width: "15%", textAlign: "left" },
      style:{ textAlign: "left" },
    //   formatter: PhoneNumber,
    },
    {
      dataField: "user_email",
      text: "ID Number",
      headerStyle: { width: "20%", textAlign: "left" },
      style:{ textAlign: "left" }
    },
    {
        dataField: "email",
        text: "Email ID",
        headerStyle: { width: "25%", textAlign: "left" },
        style:{ textAlign: "left" }
    },
    {
        dataField: "action",
        text: "Action",
        formatter: actionButton,
      }
  ];
  const onFilter = (page, sizePerPage, search) => {
    setPage(page);
    setSizeperPage(sizePerPage);
    // getUsetList(page, sizePerPage, search);
  };
  const addClick = () => {
    setAddShowModal(true);
  };
  const addShowModalClose = () => {
    setAddShowModal(false);
  };

  return (
    <div>
      <h4 className="page_title">Data collector</h4>
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
            onClick={addClick}
          >
            Add
          </button>
        </div>
      </ServerSideTable>
      {addShowModal && (
        <Add show={addShowModal} onClose={addShowModalClose} />
      )}

    </div>
  );
};

export default DataCollector;

import React, { useState } from "react";

import TermsCondition from "./TermsCondition";
import "./style.scss";
const TermsConditions = () => {
  const [whichPrivacy, setWhichPrivacy] = useState("user");
  const [editData, setEditData] = useState(false);
  const changePrivacy = (url) => {
    setEditData(false);
    setWhichPrivacy(url);
  };
  const editClick = () => {
    setEditData(true);
  };
  const onclose = () => {
    setEditData(false);
  };
  return (
    <div>
      <div className="">
        <div className="privacy_policy_main">
          <div className="row">
            <div className="col-md-6">
              <ul className="nav nav-tabs custom-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      whichPrivacy === "user" ? "active" : null
                    }`}
                    onClick={() => changePrivacy("user")}
                  >
                    User
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      whichPrivacy === "creater" ? "active" : null
                    }`}
                    onClick={() => changePrivacy("creater")}
                  >
                    Creator
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-end">
              {!editData && (
                <button
                  className="btn btn-sm btn-primary text-white f-14 fw-600"
                  onClick={editClick}
                  data-hide={editData}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="tab-content bg-white mt-3">
            <div className="tab-pane active p-3">
              {whichPrivacy === "user" && (
                <TermsCondition
                  whichPrivacy="user"
                  editData={editData}
                  onclose={onclose}
                />
              )}
              {whichPrivacy === "creater" && (
                <TermsCondition
                  whichPrivacy="creater"
                  editData={editData}
                  onclose={onclose}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsConditions;

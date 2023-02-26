import React from "react";
import Button from "../../components/Form/Button";
import FormModal from "../../components/FormModal";
const Logout = ({ show, onClose, onLogout }) => {
  return (
    <FormModal show={show} onClose={onClose} heading="Logout">
      <div className="form-group">
        <p>Are you sure you want to logout</p>
      </div>
      <div className="text-end">
        <Button
          type="button"
          className="btn-default text-blacksix me-3"
          onClick={onClose}
        >
          No
        </Button>
        <Button
          type="button"
          onClick={onLogout}
          className="btn-primary text-white"
        >
          Yes
        </Button>
      </div>
    </FormModal>
  );
};

export default Logout;

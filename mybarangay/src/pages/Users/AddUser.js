import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import FormModal from "../../components/FormModal";
import { postData } from "../../api";
import { toast } from "react-toastify";
const AddUser = ({ show, onClose }) => {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inviteObject, setInviteObject] = useState({
    email: "",
    role: "user",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInviteObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      inviteClick();
    }
  };
  const inviteClick = async () => {
    setLoading(true);

    const res = await postData("/user-invite", {}, inviteObject);
    if (res.status === 1) {
      setLoading(false);
      toast.success(res.message, { theme: "colored" });
      onClose(true);
    } else {
      toast.error(res.message, { theme: "colored" });
      setLoading(false);
    }
  };
  const cancelClick = () => {
    onClose(false);
  }
  return (
    <FormModal show={show} onClose={onClose} heading="Add New User">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
         <Input
          label="Date of Birth"
          type="text"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
         <Input
          label="Age"
          type="text"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
         <Input
          label="Email ID"
          type="email"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
        <Input
          label="Phone Number"
          type="email"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
        <Input
          label="Assign a Role"
          type="email"
          name="email"
          value={inviteObject.email}
          size="lg"
          placeholder="Enter name"
          errorMessage="Email is not valid"
          onChange={handleInput}
        ></Input>
        <div className="text-end">
          <Button
            type="button"
            disabled={loading}
            className="btn-default text-blacksix me-3"
            onClick={cancelClick}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            loading={loading}
            className="btn-primary text-white"
          >
            Send Invite
          </Button>
        </div>
      </Form>
    </FormModal>
  );
};

export default AddUser;

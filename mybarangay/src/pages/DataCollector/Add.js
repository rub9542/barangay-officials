import React, { useState } from "react";
import Button from "../../components/Form/Button";
import FormModal from "../../components/FormModal";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import { addObjectFields } from "./options";
import { Form } from "react-bootstrap";
const Add = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [addObject, setAddObject] = useState({});
  const [validated, setValidated] = useState(false);
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddObject((prev) => ({
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
      //   saveSettingClick();
    }
  };
  return (
    <FormModal heading="Add" show={show} onClose={onClose} size="lg">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-10">
            {addObjectFields.map((item, index) => (
              <React.Fragment key={index}>
                <Input
                  {...item}
                  value={addObject[item.name]}
                  onChange={handleInput}
                ></Input>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9 text-end">
            <Button
              type="submit"
              disabled={loading}
              loading={loading}
              className="btn-primary button_width text-white"
            >
              Add
            </Button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </Form>
    </FormModal>
  );
};

export default Add;

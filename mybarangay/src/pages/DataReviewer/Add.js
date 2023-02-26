import React, { useState, useEffect } from "react";
import Button from "../../components/Form/Button";
import Select from "react-select";
import { getData } from "../../api";
import "./style.scss";
import FormModal from "../../components/FormModal";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import { addObjectFields } from "./options";
import { Form } from "react-bootstrap";
const Add = (props) => {
  const [loading, setLoading] = useState(false);
  const [addObject, setAddObject] = useState({
    profile: {
      dob: "",
      gender: "",
      id: "",
      official_number: "",
      phone_no: "",
      user_id: "",
    },
  });
  const [barList, setBarList] = useState([]);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setAddObject(props.rowData);
    getBarangayList();
  }, []);
  useEffect(() => {
    setAddObject(props.rowData);
  }, [props.rowData]);
  useEffect(() => {
    if(props.type === ''){
      setValidated(false);
    }
    // setAddObject(props.rowData);
  }, [props.type]);
  const getBarName = (e) => {
    if (addObject[e]) {
      let data = barList.filter((item) => item.id === addObject[e])[0]
        .first_name;
      return data;
    } else {
      return null;
    }
  };
  const getBarangayList = async () => {
    try {
      const res = await getData("barangay-name-List/", {});
      setBarList(res.data);

    } catch (err) {
      console.log(err);
    }

  };
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (
      name === "" ||
      (name !== "email" && name !== "first_name" && name !== "barangay_id")
    ) {
      if (name === "") {
        let item = addObject;
        item.profile["gender"] = value;
        setAddObject({ ...item });
      } else {
        let item = addObject;
        item.profile[name] = value;
        setAddObject({ ...item });
      }
    } else if (name !== "") {
      let item = addObject;
      item[name] = value;
      setAddObject({ ...item });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      props.submit(addObject)
    }
  };
  const getName = (e) => {
    let item = "";
    if (addObject[e]) {
      item = addObject[e];
    } else if (addObject.profile[e]) {
      item = addObject.profile[e];
    }
    if (e === "dob") {
      var date = new Date(addObject.profile.dob),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      // let data = "2018-12-12T00:00:00".split("T")[0];
      return [date.getFullYear(), mnth, day].join("-");
    } else {
      return item;
    }
  };
   return (
    <div id="add-data-reviewer1">
      <FormModal
        // className="add-data-reviewer"
        className1="add-data-reviewer"
        heading="Add"
        show={props.show}
        onClose={props.onClose}
        size="lg"
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              {addObjectFields.map((item, index) => (
                <React.Fragment key={index}>
                  {item.name === "gender" || item.name === "barangay_id" ? (
                    <div className="form-group row undefined">
                      <div className="col-md-6">
                        <label className="fw-500 f-14 text-black form-label">
                          {item.label}
                        </label>
                      </div>
                      <div className="col-md-6 position">
                        {item.name === "barangay_id" ? (
                          <Select
                            key={index}
                            className="form-control"
                            value={getBarName(item.name)}
                            onChange={(e) =>setAddObject({...addObject, barangay_id:e.value.id})}
                            placeholder={getBarName(item.name)}
                            options={
                              barList.map((item1, index) => {
                                 return {
                                    label: item1.first_name,
                                    value: item1,
                                    key: index
                                 }
                              })
                           }
                          >
                          </Select>
                        ) : (
                          <select
                            className="form-control"
                            value={addObject.profile[item.name]}
                            onChange={(e) => handleInput(e)}
                          >
                            <option name="male"> Male</option>
                            <option name="female">Female</option>
                          </select>
                        )}
                      </div>
                    </div>
                  ) : item.name === "address" ? (
                    <div className="form-group row undefined">
                      <div className="col-md-6">
                        <label className="fw-500 f-14 text-black form-label">
                          {item.label}
                        </label>
                      </div>
                      <div className="col-md-6 position">
                        <textarea
                          {...item}
                          className={`${item.name}`}
                          value={getName(item.name)}
                          onChange={(e) => handleInput(e)}
                        ></textarea>
                      </div>
                    </div>
                  ) : (
                    <Input
                      {...item}
                      className={`${item.name}`}
                      value={getName(item.name)}
                      onChange={(e) => handleInput(e)}
                    ></Input>
                  )}
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
    </div>
  );
};

export default Add;

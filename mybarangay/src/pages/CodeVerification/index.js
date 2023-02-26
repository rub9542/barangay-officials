import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.scss";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { postData } from "../../api";
const CodeVerification = () => {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginObject((prev) => ({
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
      loginUser();
    }
  };
  const loginUser = async () => {
    setLoading(true);
    const res = await postData("/admin-signin", {}, loginObject);
    if (res.status === 1) {
      setLoading(false);
      localStorage.setItem("crunch_user", JSON.stringify(res.data));
      localStorage.setItem("crunch_token", res.data.token);
      navigate("/users");
    } else if (res.statusCode === 422) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <div className="login-box">
                <div className="img mb-4 text-center">
                  <img src={logo} alt="logo" />
                </div>
              <div className="content">
                <p>Enter the Verification Code sent to the registered email address</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter the Verification Code" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"/>
                    <Form.Control.Feedback type="invalid">
                      This field is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="text-center">
                    <Button   type="submit"
                    disabled={loading}
                    loading={loading}
                    className="btn-primary button_width text-white">
                          Verify
                    </Button>
                  </div>
                  <div className="text-center mt-4">
                    <a role="button" className="primary_color">Resend verification code</a>
                 </div>
                </Form> 

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeVerification;

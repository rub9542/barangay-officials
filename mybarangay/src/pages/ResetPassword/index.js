import React, { useState } from "react";
import { Form } from "react-bootstrap";
import tick from '../../assets/images/tick2.png';
import "./style.scss";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { postData } from "../../api";
const ResetPassword = () => {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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
    setSuccess(true);
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
                {success ? (
                  <div className="content-success">
                    <div className="tick-div">
                      <img src={tick} alt="resetpassword" />
                    </div>
                    <h4>Password Changed!</h4>
                    <span className="pwd-msg">
                      Your password has been changed successfully.
                    </span>
                    <div className="text-center">
                      <NavLink to="/login">
                        <Button
                          type="submit"
                          className="btn-primary button_width text-white"
                        >
                          Back to sign in
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4>Reset Password</h4>
                    <p>Please Enter your new password</p>
                    <div className="instruction_list">
                      <h4>Follow the instruction</h4>
                      <ul>
                        <li>Password must be at least 8 characters long.</li>
                        <li>
                          Password sould contain combination of numbers ,mixture
                          lower and upper case alaphabet and special character
                        </li>
                      </ul>
                    </div>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          This field is required
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          This field is required
                        </Form.Control.Feedback>
                      </Form.Group>
                      <div className="text-center">
                        <Button
                          type="submit"
                          disabled={loading}
                          loading={loading}
                          className="btn-primary button_width text-white"
                        >
                          Reset Password
                        </Button>
                      </div>
                    </Form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

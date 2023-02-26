import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.scss";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { postData } from "../../api";
const Login = () => {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e)
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
    const res = await postData("login/", {}, loginObject);
    if (res.status === 1) {
      setLoading(false);
      localStorage.setItem("rbim_user", JSON.stringify(res.data));
      localStorage.setItem("rbim_token", res.data.token);
      if(res.data.role == 'superadmin'){
        navigate("/dashboard");
      }
      else if (res.data.role == 'barangay'){

      }
      else if (res.data.role == 'data_reviewer'){

      }
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={loginObject.email} onChange={handleInput} name="email" required/>
                    <Form.Control.Feedback type="invalid">
                      This field is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={loginObject.password}   onChange={handleInput} name="password" required/>
                    <Form.Control.Feedback type="invalid">
                      This field is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="text-center">
                    <Button   type="submit"
                    disabled={loading}
                    loading={loading}
                    className="btn-primary button_width text-white">
                      Login
                    </Button>
                  </div>
                 <div className="text-center">
                    <p className="mt-4">Forgot Your Password? <NavLink to="/forgot-password"> Click Here </NavLink></p>
                    <NavLink to="/login-selection">Back to Login Selection</NavLink>
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

export default Login;

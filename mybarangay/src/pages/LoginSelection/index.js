import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/login_selection_logo.png"
import "./style.scss";

const LoginSelection = () => {
  
    return (
      <section className="login-section p-4">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <div className="img mb-5 text-center">
                        <img src={logo} alt="logo" />
                        <p className="text-white">Baseline Census for the Establishment of Regitry <br></br>of Barangay Inhabitants and Migrants (RBIM)</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="login_type">
                        <div className="login_head text-center">
                            <h3>Data Reviewer</h3>
                        </div>
                        <div className="login_type_body text-center">
                            <p className="mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <NavLink to="/login" className="btn-primary login_selection_btn btn text-white">Sign In </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="login_type">
                        <div className="login_head text-center">
                            <h3>Barangay officials</h3>
                        </div>
                        <div className="login_type_body text-center">
                            <p className="mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <NavLink to="/login" className="btn-primary login_selection_btn btn text-white">Sign In </NavLink>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 mb-4">
                    <div className="login_type">
                        <div className="login_head text-center">
                            <h3>Municipality officials</h3>
                        </div>
                        <div className="login_type_body text-center">
                            <p className="mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <NavLink to="/login" className="btn-primary login_selection_btn btn text-white">Sign In </NavLink>
                        </div>
                    </div>
                </div> */}
                 <div className="col-md-12 text-center">
                    <div className="img mt-5 text-center">
                        <p className="text-white">Sign in as a Super admin  <NavLink to="/login" className="ms-2 btn-primary super_selection_btn btn">Sign In </NavLink></p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default LoginSelection;
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Button from "../../components/Form/Button";
import close from "../../assets/images/close.png";

import logo from "../../assets/images/logo.png";
//style
import "./style.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
const Header = (props) => {
  const [toaster, showToaster] = useState(false)
  const [list, setList] = useState([
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 1",
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 2",
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 3",
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 4",
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 5",
    "rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt ptas sit aspernatur aut odit aut fugit 6",
  ]);
  const editList=(e)=>{
    let list1=list
    list1 = list1.filter(function(item) {
      return item !== list1[e]
  })
    setList(list1)
  }
  const clearList=()=>{
    setList([])
    showToaster(false)
  }
  
  return (
    <>
      <div className="header bg-color-primary">
        <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
          <Container fluid>
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center logo_section">
                <img src={logo} alt="logo" />
                Baseline Census for the Establishment of <br></br>Regitry of
                Barangay Inhabitants and Migrants (RBIM)
              </div>
              <Nav className="align-items-center">
                <Navbar.Text className="bell_icon">
                  <div>
                    <i onClick={()=>showToaster(!toaster)} className="fa fa-solid fa-bell"></i>
                    <Toast show={toaster} onClose={() =>showToaster(false)}>
                      <Toast.Header>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded me-2"
                          alt=""
                        />
                        <strong className="me-auto">Notifications</strong>
                        <small onClick={()=>clearList()}>Clear all</small>
                      </Toast.Header>
                      <Toast.Header>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded me-2"
                          alt=""
                        />
                        <strong className="me-auto">Today</strong>
                      </Toast.Header>
                      <Toast.Body>
                        <div className="toast-list">
                        {list.map((item, index) => {
                          return (
                            <div className="toast-list-item" key={index}>
                              <div>
                                <div className="toast-list-msg">{item}</div>
                              <div className="toast-list-time">10 min ago</div>
                              </div>
                              <img src={close} alt='close' onClick={()=>editList(index)}/>
                            </div>
                          );
                        })}
                        </div>
                        <div className='btn-div'>
                          <Button
                            type="submit"
                            className="btn-primary button_width text-white"
                          >
                            View All
                          </Button>
                        </div>
                      </Toast.Body>
                    </Toast>
                  </div>
                </Navbar.Text>
                <Dropdown as={Nav.Item} align={{ lg: "start" }}>
                  <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                    <div className="media d-flex align-items-center">
                      <div className="user_icon">
                        <i className=" fa fa-solid fa-user"></i>
                      </div>
                      <div className="media-body ms-2 text-dark align-items-center d-lg-block">
                        <span className="mb-0 font-small fw-normal text-white">
                          Jon Doe
                        </span>
                        <i className="fa fa-thin fa-chevron-down"></i>
                      </div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                    <Dropdown.Item className="fw-normal">
                      View Profile
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-normal">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;

import React, { useState,useEffect } from "react";
//lib
import { NavLink, useNavigate } from "react-router-dom";
//scss
import "./style.scss";
import {userRole} from '../../api';
const Sidebar = (props) => {
  const navigate = useNavigate();
  const [logoutShowModal, setLogoutShowModal] = useState(false);

  console.log(userRole().role);

  const logOut = () => {
    setLogoutShowModal(false);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <nav className={props.handleShow ? "mobileSide" : "sidebar customScroll"}>
        <ul>
          {userRole().role == 'superadmin' ? (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10H7C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10ZM0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17ZM10 17C10 17.2652 10.1054 17.5196 10.2929 17.7071C10.4804 17.8946 10.7348 18 11 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9H11C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10V17ZM11 7H17C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V6C10 6.26522 10.1054 6.51957 10.2929 6.70711C10.4804 6.89464 10.7348 7 11 7Z"
                      fill="#858585"
                    />
                  </svg>
                </div>
                <div>Dashboard</div>
              </NavLink>
            </li>
          ): ' '}
      
        {userRole().role == 'superadmin' ? (
            <li>
            <NavLink
              to="/barangay"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0ZM5 12V4L12 8L5 12Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Barangay</div>
            </NavLink>
          </li>
        ):' '}
          { userRole().role == 'superadmin' ? (
          <li>
          <NavLink
            to="/survey-question"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8H7C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8ZM11 8H17C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V7C10 7.26522 10.1054 7.51957 10.2929 7.70711C10.4804 7.89464 10.7348 8 11 8ZM1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V11C8 10.7348 7.89464 10.4804 7.70711 10.2929C7.51957 10.1054 7.26522 10 7 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18ZM14 18C16.206 18 18 16.206 18 14C18 11.794 16.206 10 14 10C11.794 10 10 11.794 10 14C10 16.206 11.794 18 14 18Z"
                  fill="#858585"
                />
              </svg>
            </div>
            <div>Survey Questions </div>
          </NavLink>
        </li>
          ):' '}
          <li>
            <NavLink
              to="/data-collector"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 6C10.7957 6 11.5588 5.68393 12.1214 5.12132C12.684 4.55871 13.0001 3.79565 13.0001 3C13.0001 2.20435 12.684 1.44129 12.1214 0.87868C11.5588 0.316071 10.7957 0 10.0001 0C9.2044 0 8.44134 0.316071 7.87873 0.87868C7.31612 1.44129 7.00005 2.20435 7.00005 3C7.00005 3.79565 7.31612 4.55871 7.87873 5.12132C8.44134 5.68393 9.2044 6 10.0001 6ZM6.00005 5C6.00005 5.53043 5.78934 6.03914 5.41426 6.41421C5.03919 6.78929 4.53048 7 4.00005 7C3.46962 7 2.96091 6.78929 2.58584 6.41421C2.21076 6.03914 2.00005 5.53043 2.00005 5C2.00005 4.46957 2.21076 3.96086 2.58584 3.58579C2.96091 3.21071 3.46962 3 4.00005 3C4.53048 3 5.03919 3.21071 5.41426 3.58579C5.78934 3.96086 6.00005 4.46957 6.00005 5ZM1.49005 12.326C1.31934 12.229 1.1915 12.0711 1.13205 11.884C0.955856 11.3133 0.954009 10.7031 1.12674 10.1313C1.29948 9.5596 1.63894 9.05244 2.10164 8.6748C2.56435 8.29716 3.12925 8.06622 3.72399 8.01156C4.31874 7.95691 4.91627 8.08102 5.44005 8.368C4.36368 9.42577 3.68998 10.8259 3.53505 12.327C3.51205 12.549 3.52105 12.769 3.56005 12.981C2.83021 12.9179 2.12335 12.6942 1.49005 12.326ZM16.4401 12.98C17.1698 12.9172 17.8767 12.6939 18.5101 12.326C18.6804 12.2288 18.8079 12.071 18.8671 11.884C19.0435 11.3133 19.0456 10.7028 18.873 10.1309C18.7004 9.55901 18.3609 9.05165 17.8982 8.67386C17.4354 8.29606 16.8704 8.06503 16.2755 8.01036C15.6806 7.95569 15.0829 8.07987 14.5591 8.367C15.6364 9.42473 16.3108 10.8252 16.4661 12.327C16.4883 12.5451 16.4796 12.7653 16.4401 12.981V12.98ZM18.0001 5C18.0001 5.53043 17.7893 6.03914 17.4143 6.41421C17.0392 6.78929 16.5305 7 16.0001 7C15.4696 7 14.9609 6.78929 14.5858 6.41421C14.2108 6.03914 14.0001 5.53043 14.0001 5C14.0001 4.46957 14.2108 3.96086 14.5858 3.58579C14.9609 3.21071 15.4696 3 16.0001 3C16.5305 3 17.0392 3.21071 17.4143 3.58579C17.7893 3.96086 18.0001 4.46957 18.0001 5ZM5.30405 13.19C5.20543 13.1017 5.12897 12.9914 5.08085 12.868C5.03273 12.7447 5.0143 12.6118 5.02705 12.48C5.15425 11.2495 5.73309 10.1098 6.65171 9.28125C7.57032 8.4527 8.76348 7.9941 10.0006 7.9941C11.2376 7.9941 12.4308 8.4527 13.3494 9.28125C14.268 10.1098 14.8469 11.2495 14.9741 12.48C14.9869 12.6118 14.9685 12.7447 14.9204 12.8681C14.8722 12.9914 14.7957 13.1017 14.6971 13.19C13.4113 14.3569 11.7364 15.0023 10.0001 15C8.264 15.0022 6.58954 14.3568 5.30405 13.19Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Data Collector </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data-reviewer"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 6C10.7957 6 11.5588 5.68393 12.1214 5.12132C12.684 4.55871 13.0001 3.79565 13.0001 3C13.0001 2.20435 12.684 1.44129 12.1214 0.87868C11.5588 0.316071 10.7957 0 10.0001 0C9.2044 0 8.44134 0.316071 7.87873 0.87868C7.31612 1.44129 7.00005 2.20435 7.00005 3C7.00005 3.79565 7.31612 4.55871 7.87873 5.12132C8.44134 5.68393 9.2044 6 10.0001 6ZM6.00005 5C6.00005 5.53043 5.78934 6.03914 5.41426 6.41421C5.03919 6.78929 4.53048 7 4.00005 7C3.46962 7 2.96091 6.78929 2.58584 6.41421C2.21076 6.03914 2.00005 5.53043 2.00005 5C2.00005 4.46957 2.21076 3.96086 2.58584 3.58579C2.96091 3.21071 3.46962 3 4.00005 3C4.53048 3 5.03919 3.21071 5.41426 3.58579C5.78934 3.96086 6.00005 4.46957 6.00005 5ZM1.49005 12.326C1.31934 12.229 1.1915 12.0711 1.13205 11.884C0.955856 11.3133 0.954009 10.7031 1.12674 10.1313C1.29948 9.5596 1.63894 9.05244 2.10164 8.6748C2.56435 8.29716 3.12925 8.06622 3.72399 8.01156C4.31874 7.95691 4.91627 8.08102 5.44005 8.368C4.36368 9.42577 3.68998 10.8259 3.53505 12.327C3.51205 12.549 3.52105 12.769 3.56005 12.981C2.83021 12.9179 2.12335 12.6942 1.49005 12.326ZM16.4401 12.98C17.1698 12.9172 17.8767 12.6939 18.5101 12.326C18.6804 12.2288 18.8079 12.071 18.8671 11.884C19.0435 11.3133 19.0456 10.7028 18.873 10.1309C18.7004 9.55901 18.3609 9.05165 17.8982 8.67386C17.4354 8.29606 16.8704 8.06503 16.2755 8.01036C15.6806 7.95569 15.0829 8.07987 14.5591 8.367C15.6364 9.42473 16.3108 10.8252 16.4661 12.327C16.4883 12.5451 16.4796 12.7653 16.4401 12.981V12.98ZM18.0001 5C18.0001 5.53043 17.7893 6.03914 17.4143 6.41421C17.0392 6.78929 16.5305 7 16.0001 7C15.4696 7 14.9609 6.78929 14.5858 6.41421C14.2108 6.03914 14.0001 5.53043 14.0001 5C14.0001 4.46957 14.2108 3.96086 14.5858 3.58579C14.9609 3.21071 15.4696 3 16.0001 3C16.5305 3 17.0392 3.21071 17.4143 3.58579C17.7893 3.96086 18.0001 4.46957 18.0001 5ZM5.30405 13.19C5.20543 13.1017 5.12897 12.9914 5.08085 12.868C5.03273 12.7447 5.0143 12.6118 5.02705 12.48C5.15425 11.2495 5.73309 10.1098 6.65171 9.28125C7.57032 8.4527 8.76348 7.9941 10.0006 7.9941C11.2376 7.9941 12.4308 8.4527 13.3494 9.28125C14.268 10.1098 14.8469 11.2495 14.9741 12.48C14.9869 12.6118 14.9685 12.7447 14.9204 12.8681C14.8722 12.9914 14.7957 13.1017 14.6971 13.19C13.4113 14.3569 11.7364 15.0023 10.0001 15C8.264 15.0022 6.58954 14.3568 5.30405 13.19Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Data Reviewer </div>
            </NavLink>
          </li>
          {userRole().role =='data_reviewer' ? (
            <li>
             <NavLink
               to="/data-reviewer-survey"
               className={({ isActive }) => (isActive ? "active" : "")}
             >
               <div>
                 <svg
                   width="19"
                   height="15"
                   viewBox="0 0 19 15"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M10.0001 6C10.7957 6 11.5588 5.68393 12.1214 5.12132C12.684 4.55871 13.0001 3.79565 13.0001 3C13.0001 2.20435 12.684 1.44129 12.1214 0.87868C11.5588 0.316071 10.7957 0 10.0001 0C9.2044 0 8.44134 0.316071 7.87873 0.87868C7.31612 1.44129 7.00005 2.20435 7.00005 3C7.00005 3.79565 7.31612 4.55871 7.87873 5.12132C8.44134 5.68393 9.2044 6 10.0001 6ZM6.00005 5C6.00005 5.53043 5.78934 6.03914 5.41426 6.41421C5.03919 6.78929 4.53048 7 4.00005 7C3.46962 7 2.96091 6.78929 2.58584 6.41421C2.21076 6.03914 2.00005 5.53043 2.00005 5C2.00005 4.46957 2.21076 3.96086 2.58584 3.58579C2.96091 3.21071 3.46962 3 4.00005 3C4.53048 3 5.03919 3.21071 5.41426 3.58579C5.78934 3.96086 6.00005 4.46957 6.00005 5ZM1.49005 12.326C1.31934 12.229 1.1915 12.0711 1.13205 11.884C0.955856 11.3133 0.954009 10.7031 1.12674 10.1313C1.29948 9.5596 1.63894 9.05244 2.10164 8.6748C2.56435 8.29716 3.12925 8.06622 3.72399 8.01156C4.31874 7.95691 4.91627 8.08102 5.44005 8.368C4.36368 9.42577 3.68998 10.8259 3.53505 12.327C3.51205 12.549 3.52105 12.769 3.56005 12.981C2.83021 12.9179 2.12335 12.6942 1.49005 12.326ZM16.4401 12.98C17.1698 12.9172 17.8767 12.6939 18.5101 12.326C18.6804 12.2288 18.8079 12.071 18.8671 11.884C19.0435 11.3133 19.0456 10.7028 18.873 10.1309C18.7004 9.55901 18.3609 9.05165 17.8982 8.67386C17.4354 8.29606 16.8704 8.06503 16.2755 8.01036C15.6806 7.95569 15.0829 8.07987 14.5591 8.367C15.6364 9.42473 16.3108 10.8252 16.4661 12.327C16.4883 12.5451 16.4796 12.7653 16.4401 12.981V12.98ZM18.0001 5C18.0001 5.53043 17.7893 6.03914 17.4143 6.41421C17.0392 6.78929 16.5305 7 16.0001 7C15.4696 7 14.9609 6.78929 14.5858 6.41421C14.2108 6.03914 14.0001 5.53043 14.0001 5C14.0001 4.46957 14.2108 3.96086 14.5858 3.58579C14.9609 3.21071 15.4696 3 16.0001 3C16.5305 3 17.0392 3.21071 17.4143 3.58579C17.7893 3.96086 18.0001 4.46957 18.0001 5ZM5.30405 13.19C5.20543 13.1017 5.12897 12.9914 5.08085 12.868C5.03273 12.7447 5.0143 12.6118 5.02705 12.48C5.15425 11.2495 5.73309 10.1098 6.65171 9.28125C7.57032 8.4527 8.76348 7.9941 10.0006 7.9941C11.2376 7.9941 12.4308 8.4527 13.3494 9.28125C14.268 10.1098 14.8469 11.2495 14.9741 12.48C14.9869 12.6118 14.9685 12.7447 14.9204 12.8681C14.8722 12.9914 14.7957 13.1017 14.6971 13.19C13.4113 14.3569 11.7364 15.0023 10.0001 15C8.264 15.0022 6.58954 14.3568 5.30405 13.19Z"
                     fill="#858585"
                   />
                 </svg>
               </div>
               <div>Survey </div>
             </NavLink>
           </li>
          ) : ' '}
         
          {/* <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 6C10.7957 6 11.5588 5.68393 12.1214 5.12132C12.684 4.55871 13.0001 3.79565 13.0001 3C13.0001 2.20435 12.684 1.44129 12.1214 0.87868C11.5588 0.316071 10.7957 0 10.0001 0C9.2044 0 8.44134 0.316071 7.87873 0.87868C7.31612 1.44129 7.00005 2.20435 7.00005 3C7.00005 3.79565 7.31612 4.55871 7.87873 5.12132C8.44134 5.68393 9.2044 6 10.0001 6ZM6.00005 5C6.00005 5.53043 5.78934 6.03914 5.41426 6.41421C5.03919 6.78929 4.53048 7 4.00005 7C3.46962 7 2.96091 6.78929 2.58584 6.41421C2.21076 6.03914 2.00005 5.53043 2.00005 5C2.00005 4.46957 2.21076 3.96086 2.58584 3.58579C2.96091 3.21071 3.46962 3 4.00005 3C4.53048 3 5.03919 3.21071 5.41426 3.58579C5.78934 3.96086 6.00005 4.46957 6.00005 5ZM1.49005 12.326C1.31934 12.229 1.1915 12.0711 1.13205 11.884C0.955856 11.3133 0.954009 10.7031 1.12674 10.1313C1.29948 9.5596 1.63894 9.05244 2.10164 8.6748C2.56435 8.29716 3.12925 8.06622 3.72399 8.01156C4.31874 7.95691 4.91627 8.08102 5.44005 8.368C4.36368 9.42577 3.68998 10.8259 3.53505 12.327C3.51205 12.549 3.52105 12.769 3.56005 12.981C2.83021 12.9179 2.12335 12.6942 1.49005 12.326ZM16.4401 12.98C17.1698 12.9172 17.8767 12.6939 18.5101 12.326C18.6804 12.2288 18.8079 12.071 18.8671 11.884C19.0435 11.3133 19.0456 10.7028 18.873 10.1309C18.7004 9.55901 18.3609 9.05165 17.8982 8.67386C17.4354 8.29606 16.8704 8.06503 16.2755 8.01036C15.6806 7.95569 15.0829 8.07987 14.5591 8.367C15.6364 9.42473 16.3108 10.8252 16.4661 12.327C16.4883 12.5451 16.4796 12.7653 16.4401 12.981V12.98ZM18.0001 5C18.0001 5.53043 17.7893 6.03914 17.4143 6.41421C17.0392 6.78929 16.5305 7 16.0001 7C15.4696 7 14.9609 6.78929 14.5858 6.41421C14.2108 6.03914 14.0001 5.53043 14.0001 5C14.0001 4.46957 14.2108 3.96086 14.5858 3.58579C14.9609 3.21071 15.4696 3 16.0001 3C16.5305 3 17.0392 3.21071 17.4143 3.58579C17.7893 3.96086 18.0001 4.46957 18.0001 5ZM5.30405 13.19C5.20543 13.1017 5.12897 12.9914 5.08085 12.868C5.03273 12.7447 5.0143 12.6118 5.02705 12.48C5.15425 11.2495 5.73309 10.1098 6.65171 9.28125C7.57032 8.4527 8.76348 7.9941 10.0006 7.9941C11.2376 7.9941 12.4308 8.4527 13.3494 9.28125C14.268 10.1098 14.8469 11.2495 14.9741 12.48C14.9869 12.6118 14.9685 12.7447 14.9204 12.8681C14.8722 12.9914 14.7957 13.1017 14.6971 13.19C13.4113 14.3569 11.7364 15.0023 10.0001 15C8.264 15.0022 6.58954 14.3568 5.30405 13.19Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Users </div>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.19 3.47C0.47 3.79 0 4.51 0 5.3V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V5.3C18 4.51 17.53 3.79 16.81 3.47L9.81 0.36C9.29 0.13 8.7 0.13 8.19 0.36L1.19 3.47ZM9 6C9.55 6 10 6.45 10 7C10 7.55 9.55 8 9 8C8.45 8 8 7.55 8 7C8 6.45 8.45 6 9 6ZM9 10C9.55 10 10 10.45 10 11V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V11C8 10.45 8.45 10 9 10Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Reports</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/termsConditions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V8H10C9.46957 8 8.96086 7.78929 8.58579 7.41421C8.21071 7.03914 8 6.53043 8 6ZM3 10.25C3 10.0511 3.07902 9.86032 3.21967 9.71967C3.36032 9.57902 3.55109 9.5 3.75 9.5C3.94891 9.5 4.13968 9.57902 4.28033 9.71967C4.42098 9.86032 4.5 10.0511 4.5 10.25C4.5 10.4489 4.42098 10.6397 4.28033 10.7803C4.13968 10.921 3.94891 11 3.75 11C3.55109 11 3.36032 10.921 3.21967 10.7803C3.07902 10.6397 3 10.4489 3 10.25ZM3 13.25C3 13.0511 3.07902 12.8603 3.21967 12.7197C3.36032 12.579 3.55109 12.5 3.75 12.5C3.94891 12.5 4.13968 12.579 4.28033 12.7197C4.42098 12.8603 4.5 13.0511 4.5 13.25C4.5 13.4489 4.42098 13.6397 4.28033 13.7803C4.13968 13.921 3.94891 14 3.75 14C3.55109 14 3.36032 13.921 3.21967 13.7803C3.07902 13.6397 3 13.4489 3 13.25ZM3 16.25C3 16.0511 3.07902 15.8603 3.21967 15.7197C3.36032 15.579 3.55109 15.5 3.75 15.5C3.94891 15.5 4.13968 15.579 4.28033 15.7197C4.42098 15.8603 4.5 16.0511 4.5 16.25C4.5 16.4489 4.42098 16.6397 4.28033 16.7803C4.13968 16.921 3.94891 17 3.75 17C3.55109 17 3.36032 16.921 3.21967 16.7803C3.07902 16.6397 3 16.4489 3 16.25ZM6 10.25C6 10.0511 6.07902 9.86032 6.21967 9.71967C6.36032 9.57902 6.55109 9.5 6.75 9.5H12.25C12.4489 9.5 12.6397 9.57902 12.7803 9.71967C12.921 9.86032 13 10.0511 13 10.25C13 10.4489 12.921 10.6397 12.7803 10.7803C12.6397 10.921 12.4489 11 12.25 11H6.75C6.55109 11 6.36032 10.921 6.21967 10.7803C6.07902 10.6397 6 10.4489 6 10.25ZM6 13.25C6 13.0511 6.07902 12.8603 6.21967 12.7197C6.36032 12.579 6.55109 12.5 6.75 12.5H12.25C12.4489 12.5 12.6397 12.579 12.7803 12.7197C12.921 12.8603 13 13.0511 13 13.25C13 13.4489 12.921 13.6397 12.7803 13.7803C12.6397 13.921 12.4489 14 12.25 14H6.75C6.55109 14 6.36032 13.921 6.21967 13.7803C6.07902 13.6397 6 13.4489 6 13.25ZM6 16.25C6 16.0511 6.07902 15.8603 6.21967 15.7197C6.36032 15.579 6.55109 15.5 6.75 15.5H12.25C12.4489 15.5 12.6397 15.579 12.7803 15.7197C12.921 15.8603 13 16.0511 13 16.25C13 16.4489 12.921 16.6397 12.7803 16.7803C12.6397 16.921 12.4489 17 12.25 17H6.75C6.55109 17 6.36032 16.921 6.21967 16.7803C6.07902 16.6397 6 16.4489 6 16.25ZM9.5 6V0.5L15.5 6.5H10C9.86739 6.5 9.74021 6.44732 9.64645 6.35355C9.55268 6.25979 9.5 6.13261 9.5 6Z"
                    fill="#858585"
                  />
                </svg>
              </div>
              <div>Legal & Documentation</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;

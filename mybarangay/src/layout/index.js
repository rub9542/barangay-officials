import React, {  useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
//scss
import "./style.scss";
import PrivateRoute from "../privateRoute";
import 'react-toastify/dist/ReactToastify.css';
import Toast from "../components/Toast";
//pages

export default function Layout(props) {
  // const [sidebarHide, setSidebarHide] = useState(false);
  const [showNav,setShowNav] =useState(false)
  return (
    <>
      <PrivateRoute>
        <Header handleNav={()=>setShowNav(!showNav)} handleShow={showNav}/>
        <main className="main-layout">
          {<Sidebar handleShow={showNav} />}
          <div className= "main-body fixed">
            <Toast/>
            <Outlet></Outlet>
          </div>
        </main>
      </PrivateRoute>
    </>
  );
}

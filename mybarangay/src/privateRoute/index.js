import React from "react";
import { Navigate } from "react-router-dom";
import { isLogedIn } from "../api";

const PrivateRoute = ({ children }) => {
  if (!isLogedIn()) {
    return <Navigate to="/login-selection" replace />;
  }
  return children;
};
export default PrivateRoute;

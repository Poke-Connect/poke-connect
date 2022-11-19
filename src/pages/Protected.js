import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const isLoggedIn = user && user.accessToken ? true : false;

  // TODO: change after creating Header
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return children;
};
export default Protected;

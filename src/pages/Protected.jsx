import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "context/AuthProvider";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const isLoggedIn = user && user.accessToken ? true : false;

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default Protected;

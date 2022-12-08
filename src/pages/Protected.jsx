import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "context/AuthContext";
import Loading from "./Loading";

const Protected = ({ children }) => {
  const { user , loading } = UserAuth();
  const isLoggedIn = user && user.accessToken ? true : false;
  if (loading) {
    return <Loading />;
  }
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default Protected;

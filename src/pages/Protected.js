import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => {
  const { user = {} } = UserAuth();
  const isLoggedIn = user && user.accessToken ? true : false;

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Protected;

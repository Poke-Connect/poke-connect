import React from "react";
import { Navigate } from "react-router-dom";
import { logout } from "features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Protected = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  if (!user || !user._id) {
    dispatch(logout());
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default Protected;

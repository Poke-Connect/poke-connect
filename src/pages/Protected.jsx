import React from "react";
import { Navigate } from "react-router-dom";
import { logout } from "features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks";

const Protected = ({ children }) => {
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useDispatch();

  if (!user || !user._id) {
    dispatch(logout());
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default Protected;

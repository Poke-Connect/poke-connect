import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import { logout } from "features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const AppLayout = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  if (!user._id) {
    dispatch(logout());
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex flex-col fixed w-screen h-full">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div className="flex pt-5 h-[90%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

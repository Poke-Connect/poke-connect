import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { logout } from "features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { checkLocation } from "components/helpers";

const AppLayout = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const location = useLocation();
  const isChatPage = checkLocation(location.pathname, "chat");

  if (!user._id) {
    dispatch(logout());
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex flex-col fixed w-screen h-full">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div
        className={
          "flex h-[90%] " + (!isChatPage ? "pt-5 overflow-y-scroll" : "pt-0")
        }
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

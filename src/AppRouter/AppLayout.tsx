import React, { FC } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { logout } from "features/auth/authSlice";
import { checkLocation } from "helpers/utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { Header } from "containers";

const AppLayout: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

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

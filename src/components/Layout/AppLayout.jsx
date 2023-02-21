import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { UserAuth } from "context/AuthProvider";

const AppLayout = () => {
  const { user } = UserAuth();
  if (!user) {
    return <></>;
  }

  return (
    <div className="flex flex-col fixed w-screen h-full overflow-y-scroll ">
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

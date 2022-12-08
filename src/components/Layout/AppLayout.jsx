import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col fixed w-screen h-screen overflow-y-scroll ">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div className=" flex pt-5 h-[90%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

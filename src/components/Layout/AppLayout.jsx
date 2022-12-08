import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col fixed w-screen h-screen overflow-y-scroll ">
      <div className=" flex ">
        <Header />
      </div>
      <div className=" flex pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;

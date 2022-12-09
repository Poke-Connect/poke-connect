import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {
  return (
    <div className="flex flex-col fixed w-screen h-full overflow-y-scroll ">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div className="h-[90%] ">
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
      />
    </div>
  );
};

export default AppLayout;

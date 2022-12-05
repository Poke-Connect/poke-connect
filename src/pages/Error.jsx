import React from "react";
import Header from "../components/Layout/Header/Header";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const onHomeClickHandler = () => {
    navigate(`/home`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Header />
      <div className="items-center mt-44 justify-center h-full">
        <h1 className="text-2xl">Found a new page?</h1>
        <h2>Our team is working on creating it.</h2>
        <h2>While we are working, let us guide you out of here.</h2>
        <div className="flex flex-col items-center m-10 mt-20">
          <button
            onClick={onHomeClickHandler}
            className="flex flex-col bg-black text-white w-full items-center p-2 border-primary border-r-4 border-b-4"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;

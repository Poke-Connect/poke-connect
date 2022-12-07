import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const onHomeClickHandler = () => {
    navigate(`/home`);
  };
  return (
    <div id="container" className="mt-44 px-10">
      <div id="textContainer" className="items-center justify-center ">
        <h1 className="text-2xl">Found a new page?</h1>
        <h2>Our team is working on creating it.</h2>
        <h2>While we are working, let us guide you out of here.</h2>
      </div>
      <div className="flex flex-col items-center m-10 mt-10">
        <button
          onClick={onHomeClickHandler}
          className="flex flex-col bg-black text-white w-full items-center p-2 border-primary border-r-4 border-b-4"
        >
          HOME
        </button>
      </div>
    </div>
  );
};

export default Error;

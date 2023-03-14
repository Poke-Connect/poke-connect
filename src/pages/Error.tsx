import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Error: FC = () => {
  const navigate = useNavigate();

  const onHomeClickHandler = () => {
    navigate(`/home`);
  };

  return (
    <div id="container" className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">404</h1>
        <p className="mt-2 text-lg font-medium text-gray-900">
          Ahh, found a new page?
        </p>
        <p className="mt-1 text-md text-gray-500">
          Our team is working on creating it. In the meantime, let us guide you
          out of here.
        </p>
        <div className="mt-6">
          <button
            onClick={onHomeClickHandler}
            className="bg-black text-white w-[70%] items-center p-2 border-primary border-r-4 border-b-4"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;

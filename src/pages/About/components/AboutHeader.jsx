import React from "react";
import Header from "components/Layout/Header/Header";
import { useNavigate } from "react-router-dom";

const AboutHeader = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  if (isLoggedIn) {
    return <Header />;
  }

  const onHomeClickHandler = () => {
    navigate(`/home`);
  };

  return (
    <div className=" bg-black flex items-center py-6 left-0  top-0  z-50  w-full justify-between">
      <div>
        <span
          className="text-5xl font-bold text-left pl-5  text-white "
          onClick={onHomeClickHandler}
        >
          POKE
        </span>
      </div>
    </div>
  );
};

export default AboutHeader;

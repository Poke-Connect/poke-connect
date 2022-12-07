import React from "react";
import { NavLink } from "react-router-dom";

const FooterButton = (props) => {
  const { toRoute, text } = props;
  let activeStyle = {
    color: "black",
  };
  return (
    <div className="border-whiteGray border h-full text-typeText flex-1 font-semibold text-lg ">
      <NavLink
        to={toRoute}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="flex h-full  items-center justify-center"
      >
        {text}
      </NavLink>
    </div>
  );
};

export default FooterButton;

import React from "react";
import { NavLink } from "react-router-dom";
import NumberCircle from "components/UI/NumberCircle";

const FooterButton = (props) => {
  const { toRoute, text, count = 0 } = props;

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
        <p className="pr-2"> {text}</p>
        <NumberCircle count={count} />
      </NavLink>
    </div>
  );
};

export default FooterButton;

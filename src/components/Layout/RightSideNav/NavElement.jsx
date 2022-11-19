import React from "react";
import { NavLink } from "react-router-dom";

const NavElement = (props) => {
  const { title, toRoute, onClickHandler, styles = "" } = props;
  // let activeClassName = "underline";
  return (
    <li
      className={"border-b border-black py-5" + styles}
      onClick={onClickHandler}
    >
      <NavLink
        to={toRoute}
        // style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavElement;

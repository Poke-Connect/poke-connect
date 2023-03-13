import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const PRIMARY_COLOR = "rgba(216, 63, 135, 1)";

interface IProps {
  title: string;
  toRoute: string;
  onClickHandler: () => void;
}

const NavElement: FC<IProps> = (props) => {
  const { title, toRoute, onClickHandler } = props;
  let activeStyle = {
    borderColor: PRIMARY_COLOR,
  };
  return (
    <NavLink
      to={toRoute}
      className={"border-b-2 border-darkGray py-5 min-w-[85%] justify-end flex"}
      onClick={onClickHandler}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      <p className="text-right">{title}</p>
    </NavLink>
  );
};

export default NavElement;

import React from "react";

const IconElement = (props) => {
  const { Icon, onClickHandler } = props;
  return (
    <button className="flex-none mr-4 cursor-pointer " onClick={onClickHandler}>
      <Icon />
    </button>
  );
};

export default IconElement;

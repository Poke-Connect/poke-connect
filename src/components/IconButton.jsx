import React from "react";

const IconButton = (props) => {
  const { IconParam, onPressHandler } = props;
  return (
    <button onClick={onPressHandler}>
      <IconParam />
    </button>
  );
};

export default IconButton;

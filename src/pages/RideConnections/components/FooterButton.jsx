import React from "react";

const FooterButton = (props) => {
  const { onClickHandler, text } = props;
  return (
    <button
      className="border-whiteGray border  h-full w-1/2"
      onClick={onClickHandler}
    >
      <p>{text}</p>
    </button>
  );
};

export default FooterButton;

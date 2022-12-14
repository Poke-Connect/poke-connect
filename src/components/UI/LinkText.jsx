import React from "react";

const LinkText = (props) => {
  const { text = "", onClickHandler = () => {} } = props;
  return (
    <p className="text-primary text-sm underline pt-2" onClick={onClickHandler}>
      {text}
    </p>
  );
};

export default LinkText;

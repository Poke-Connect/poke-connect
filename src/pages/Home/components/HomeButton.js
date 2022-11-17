import React from "react";

const HomeButton = (props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default HomeButton;

import React from "react";

const Line = (props) => {
  const { marginY } = props;
  return <span className={`h-0.5 bg-primary my-${marginY} w-full`}></span>;
};

export default Line;

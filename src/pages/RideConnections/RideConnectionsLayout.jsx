import React from "react";
import Heading from "components/UI/Heading";

const RideConnectionsLayout = (props) => {
  const { heading } = props;

  return (
    <div>
      <Heading text={heading} />
      <div>{props.children}</div>
    </div>
  );
};

export default RideConnectionsLayout;

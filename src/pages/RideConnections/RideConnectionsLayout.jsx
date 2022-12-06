import React from "react";
import Heading from "components/UI/Heading";
import FooterLayout from "./components/FooterLayout";

const RideConnectionsLayout = (props) => {
  const { rideId, heading } = props;

  return (
    <div>
      <Heading text={heading} />
      {props.children}
      <FooterLayout rideId={rideId} />
    </div>
  );
};

export default RideConnectionsLayout;

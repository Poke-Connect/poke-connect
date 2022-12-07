import React from "react";
import FooterButton from "./FooterButton";

const FooterLayout = (props) => {
  const { rideId } = props;

  return (
    <div className=" flex flex-row absolute mt-10 h-12 bottom-0 w-screen">
      <FooterButton
        text={"Connected"}
        toRoute={`/rideconnections/${rideId}/connected`}
      />
      <FooterButton
        text={"Available"}
        toRoute={`/rideconnections/${rideId}/available`}
      />
    </div>
  );
};

export default FooterLayout;

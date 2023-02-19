import React from "react";
import FooterButton from "./FooterButton";

const FooterLayout = (props) => {
  const { rideId, availableCount, connectedCount } = props;
  // console.log("available count", availableCount);
  // console.log("connectedCount count", connectedCount);


  return (
    <div className="flex flex-row  mt-auto h-12  w-screen ">
      <FooterButton
        text={"Available"}
        toRoute={`/rideconnections/${rideId}/available`}
        count={availableCount}
      />
      <FooterButton
        text={"Connected"}
        toRoute={`/rideconnections/${rideId}/connected`}
        count={connectedCount}
      />
    </div>
  );
};

export default FooterLayout;

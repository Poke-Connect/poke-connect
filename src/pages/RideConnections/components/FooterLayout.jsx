import React, { useEffect, useState } from "react";
import FooterButton from "./FooterButton";

const FooterLayout = (props) => {
  const { rideId, connectedCount } = props;
  const availableCount = localStorage.getItem("availableCount");
  const [availCount, setAvailCount] = useState(availableCount);

  useEffect(() => {
    setAvailCount(availableCount);
  }, [availableCount]);

  return (
    <div className="flex flex-row  mt-auto h-12  w-screen ">
      <FooterButton
        text={"Available"}
        toRoute={`/rideconnections/${rideId}/available`}
        count={availCount}
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

import React, { FC } from "react";
import FooterButton from "./FooterButton";

interface IProps {
  rideId: string;
  availableCount: number;
  connectedCount: number;
}

const FooterLayout: FC<IProps> = (props) => {
  const { rideId, availableCount, connectedCount } = props;

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

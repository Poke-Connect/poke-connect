import React, { FC } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";

const RideConnections: FC = () => {
  const params = useParams();
  const { rideId } = params;

  return (
    <div className="flex-col flex justify-between ">
      <Outlet />
      <FooterLayout rideId={rideId} />
    </div>
  );
};

export default RideConnections;

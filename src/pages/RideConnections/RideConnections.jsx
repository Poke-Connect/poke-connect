import React from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";

const RideConnections = () => {
  const params = useParams();
  const { rideId } = params;

  return (
    <div className="flex">
      <Outlet />
      <FooterLayout rideId={rideId} />
    </div>
  );
};

export default RideConnections;

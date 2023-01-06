import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ShowRideConnections from "./ShowRideConnections";
import { useOutletContext } from "react-router-dom";
import { headingStrings } from "strings/headingStrings";

const ConnectedConnections = () => {
  const { connectedConnections } = useOutletContext();

  return (
    <RideConnectionsLayout heading={headingStrings.CONNECTED_CONNECTIONS}>
      <ShowRideConnections rideConnections={connectedConnections} />
    </RideConnectionsLayout>
  );
};

export default ConnectedConnections;

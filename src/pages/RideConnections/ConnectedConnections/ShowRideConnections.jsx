import React from "react";
import { createConnectedConnectionsList } from "../helpers";
import ConnectedConnectionsList from "./ConnectedConnectionsList";

const ShowRideConnections = (props) => {
  const { rideConnections } = props;

  if (!rideConnections) {
    return null;
  }

  const connectionsdata = createConnectedConnectionsList(rideConnections);

  return (
    <div>
      <ConnectedConnectionsList connectionsdata={connectionsdata} />
    </div>
  );
};

export default ShowRideConnections;

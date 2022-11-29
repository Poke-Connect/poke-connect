import React from "react";
import { createConnectedConnectionsList } from "../helpers";
import ConnectionsList from "../components/ConnectionsList";

const ShowRideConnections = (props) => {
  const { rideConnections } = props;

  if (!rideConnections) {
    return null;
  }

  const connectionsdata = createConnectedConnectionsList(rideConnections);

  return (
    <div>
      <ConnectionsList connectionsdata={connectionsdata} />
    </div>
  );
};

export default ShowRideConnections;

import React from "react";
import { createConnectedConnectionsList } from "../helpers";
import ConnectedConnectionsList from "./ConnectedConnectionsList";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "strings/emptyStrings";

const ShowRideConnections = (props) => {
  const { rideConnections } = props;

  if (!rideConnections) {
    return <EmptyItem text={emptyStrings.CONNECTED_CONNECTIONS} />;
  }

  const connectionsdata = createConnectedConnectionsList(rideConnections);

  return (
    <div>
      <ConnectedConnectionsList connectionsdata={connectionsdata} />
    </div>
  );
};

export default ShowRideConnections;

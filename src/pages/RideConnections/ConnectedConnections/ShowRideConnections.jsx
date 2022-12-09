import React from "react";
import { createConnectedConnectionsList } from "../helpers";
import ConnectedConnectionsList from "./ConnectedConnectionsList";
import EmptyItem from "components/UI/EmptyItem";

const EMPTY_CONNECTED_TEXT =
  "No connections yet. Please go to the Available tab to find new matches.";

const ShowRideConnections = (props) => {
  const { rideConnections } = props;

  if (!rideConnections) {
    return <EmptyItem text={EMPTY_CONNECTED_TEXT} />;
  }

  const connectionsdata = createConnectedConnectionsList(rideConnections);

  return (
    <div>
      <ConnectedConnectionsList connectionsdata={connectionsdata} />
    </div>
  );
};

export default ShowRideConnections;

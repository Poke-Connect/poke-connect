import React from "react";
import { createConnectedConnectionsList } from "../helpers";
import ConnectedConnectionsList from "./ConnectedConnectionsList";
import EmptyItem from "components/UI/EmptyItem";

const EMPTY_CONNECTED_TEXT =
  "No connections yet. Please go to the Available tab to find new matches.";

const ShowRideConnections = (props) => {
  const { rideConnections } = props;

  if (!rideConnections) {
    return null;
  }

  const connectionsdata = createConnectedConnectionsList(rideConnections);

  const isEmpty = connectionsdata.length === 0 ? true : false;

  if (isEmpty) {
    return <EmptyItem text={EMPTY_CONNECTED_TEXT} />;
  }

  return (
    <div>
      <ConnectedConnectionsList connectionsdata={connectionsdata} />
    </div>
  );
};

export default ShowRideConnections;

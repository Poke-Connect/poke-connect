import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ShowRideConnections from "./ShowRideConnections";
import ConnectedConnectionsList from "./ConnectedConnectionsList";

import { useOutletContext } from "react-router-dom";
import { headingStrings } from "strings/headingStrings";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "strings/emptyStrings";

const ConnectedConnections = () => {
  const { connectedConnections } = useOutletContext();

  if (!connectedConnections || connectedConnections.length === 0) {
    return <EmptyItem text={emptyStrings.CONNECTED_CONNECTIONS} />;
  }

  // console.log("connnected connections final", connectedConnections);

  return (
    <RideConnectionsLayout heading={headingStrings.CONNECTED_CONNECTIONS}>
      <ConnectedConnectionsList
        connectionsData={connectedConnections.connectedConnections}
      />
    </RideConnectionsLayout>
  );
};

export default ConnectedConnections;

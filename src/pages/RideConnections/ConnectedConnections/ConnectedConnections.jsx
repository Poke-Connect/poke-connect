import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ConnectedConnectionsList from "./ConnectedConnectionsList";
import { useOutletContext } from "react-router-dom";
import { headingStrings } from "constants/headingStrings";

const ConnectedConnections = () => {
  const { connectedConnections } = useOutletContext();

  return (
    <RideConnectionsLayout heading={headingStrings.CONNECTED_CONNECTIONS}>
      <ConnectedConnectionsList
        connectionsData={connectedConnections?.connectedConnections}
      />
    </RideConnectionsLayout>
  );
};

export default ConnectedConnections;

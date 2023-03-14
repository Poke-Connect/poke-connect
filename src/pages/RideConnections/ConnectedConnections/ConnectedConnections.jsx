import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ConnectedConnectionsList from "./ConnectedConnectionsList";
import { useOutletContext } from "react-router-dom";
import { HEADING_STRINGS } from "appConstants";

const ConnectedConnections = () => {
  const { connectedConnections } = useOutletContext();

  return (
    <RideConnectionsLayout heading={HEADING_STRINGS.CONNECTED_CONNECTIONS}>
      <ConnectedConnectionsList
        connectionsData={connectedConnections?.connectedConnections}
      />
    </RideConnectionsLayout>
  );
};

export default ConnectedConnections;

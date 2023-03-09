import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import { useOutletContext } from "react-router-dom";
import AvailableConnectionsList from "./AvailableConnectionsList";
import { HEADING_STRINGS } from "appConstants";

const AvailableConnections = () => {
  const { myRide, availableConnections } = useOutletContext();

  return (
    <RideConnectionsLayout heading={HEADING_STRINGS.AVAILABLE_CONNECTIONS}>
      <AvailableConnectionsList
        myRide={myRide}
        availableConnections={availableConnections}
      />
    </RideConnectionsLayout>
  );
};

export default AvailableConnections;

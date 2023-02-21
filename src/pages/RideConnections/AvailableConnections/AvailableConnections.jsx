import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import { useOutletContext } from "react-router-dom";
import { headingStrings } from "strings/headingStrings";
import AvailableConnectionsList from "./AvailableConnectionsList";

const AvailableConnections = () => {
  const { myRide, availableConnections } = useOutletContext();

  return (
    <RideConnectionsLayout heading={headingStrings.AVAILABLE_CONNECTIONS}>
      <AvailableConnectionsList
        myRide={myRide}
        availableConnections={availableConnections}
      />
    </RideConnectionsLayout>
  );
};

export default AvailableConnections;

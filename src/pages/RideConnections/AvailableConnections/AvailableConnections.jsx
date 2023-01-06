import React from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ShowConnectionsHandler from "./ShowConnectionsHandler";
import { useOutletContext } from "react-router-dom";
import { headingStrings } from "strings/headingStrings";

const AvailableConnections = () => {
  const { connectedConnections, myRide } = useOutletContext();
  return (
    <RideConnectionsLayout heading={headingStrings.AVAILABLE_CONNECTIONS}>
      {myRide && (
        <ShowConnectionsHandler
          myRide={myRide}
          alreadyConnected={connectedConnections}
        />
      )}
    </RideConnectionsLayout>
  );
};

export default AvailableConnections;

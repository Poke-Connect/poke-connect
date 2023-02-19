import React, { useEffect } from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ShowConnectionsHandler from "./ShowConnectionsHandler";
import { useOutletContext } from "react-router-dom";
import { headingStrings } from "strings/headingStrings";
import { getOthersRidesByDate } from "api/ride";
import { UserAuth } from "context/AuthProvider";
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

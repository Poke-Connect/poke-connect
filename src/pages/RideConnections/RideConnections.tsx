import React, { FC } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";
import { useRideConnectionsFetch } from "customHooks";
import { getConnectedCount } from "./helpers";
import { useAppSelector } from "hooks";

const RideConnections: FC = () => {
  const params = useParams();
  const { rideId } = params;
  const { user } = useAppSelector((store) => store.auth);

  const { myRide, connectedConnections, availableConnections } =
    useRideConnectionsFetch(rideId, user);

  if (!rideId) {
    return null;
  }

  return (
    <div className="relative w-full">
      <div className="pb-20">
        <Outlet
          context={{ myRide, connectedConnections, availableConnections }}
        />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white">
        <FooterLayout
          rideId={rideId}
          connectedCount={getConnectedCount(connectedConnections)}
          availableCount={
            availableConnections ? availableConnections.length : 0
          }
        />
      </div>
    </div>
  );
};

export default RideConnections;

/**TEST CASES
 * 1. Rides on addition changes from available to connected
 * 2. Count is changing
 */

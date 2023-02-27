import React, { FC, useEffect, useState } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";
import {
  getConnectedRideConnections,
  getRide,
  getFilteredRides,
} from "api/ride";
import { getFilteredRidesTimeNew } from "helpers/getFilteredRidesTimeNew";
import { getConnectedCount } from "./helpers";
import { Socket } from "context/SocketContext";
import { useSelector } from "react-redux";

const RideConnections: FC = () => {
  const params = useParams();
  const { rideId } = params;
  const { user } = useSelector((store: any) => store.auth);

  const [myRide, setMyRide] = useState(null);
  const [connectedConnections, setConnectedConnections] = useState([]);
  const [availableConnections, setAvailableConnections] = useState<any>([]);
  const [connectedCount, setConnectedCount] = useState<number>(0);
  const [availableCount, setAvailableCount] = useState<number>(0);
  const socket = Socket();

  //shift this to custom hook
  useEffect(() => {
    const fetchConnections = async () => {
      if (rideId) {
        const ride = await getRide(rideId);
        setMyRide(ride);

        const connectedRideConnections = await getConnectedRideConnections(
          rideId
        );
        setConnectedConnections(connectedRideConnections);
        setConnectedCount(getConnectedCount(connectedRideConnections));

        let filteredRides: any;
        if (ride) {
          filteredRides = await getFilteredRides(
            rideId,
            user._id,
            ride.date,
            ride.rideType
          );
        } else {
          filteredRides = [];
        }

        const filteredTimeRides = await getFilteredRidesTimeNew(
          ride,
          filteredRides
        );
        setAvailableConnections(filteredTimeRides);
        setAvailableCount(filteredTimeRides ? filteredTimeRides.length : 0);
      }
    };

    // Handle incoming events from the server
    if (socket) {
      socket.on("connection-added", fetchConnections);
      socket.on("get-ride", fetchConnections);
      socket.on("get-toggled-ride", fetchConnections);
    }
    fetchConnections();

    return () => {
      if (socket) {
        // Remove 'connection-added' event listener
        socket.off("connection-added", fetchConnections);
        socket.off("get-ride", fetchConnections);
        socket.off("get-toggled-ride", fetchConnections);
      }
    };
  }, [rideId, socket, user]);

  return (
    <div className="flex-col flex justify-between ">
      <Outlet
        context={{ myRide, connectedConnections, availableConnections }}
      />
      <FooterLayout
        rideId={rideId}
        connectedCount={connectedCount}
        availableCount={availableCount}
      />
    </div>
  );
};

export default RideConnections;

/**TEST CASES
 * 1. Rides on addition changes from available to connected
 * 2. Count is changing
 */

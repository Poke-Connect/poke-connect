import { useEffect, useState } from "react";
import { useSocket } from "context/SocketContext";
import {
  getConnectedRideConnections,
  getRide,
  getFilteredRides,
} from "api/ride";
import { getFilteredRidesTimeNew } from "helpers/getFilteredRidesTimeNew";

export const useRideConnectionsFetch = (rideId: any, user: any) => {
  const [myRide, setMyRide] = useState(null);
  const [connectedConnections, setConnectedConnections] = useState<any>([]);
  const [availableConnections, setAvailableConnections] = useState<any>([]);

  const socket = useSocket();

  useEffect(() => {
    const fetchConnections = async () => {
      if (rideId) {
        const ride = await getRide(rideId);
        setMyRide(ride);

        const connectedRideConnections = await getConnectedRideConnections(
          rideId
        );
        setConnectedConnections(connectedRideConnections);

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
      }
    };

    if (socket) {
      socket.on("connection-added", fetchConnections);
      socket.on("get-ride", fetchConnections);
      socket.on("get-toggled-ride", fetchConnections);
    }
    fetchConnections();

    return () => {
      if (socket) {
        socket.off("connection-added", fetchConnections);
        socket.off("get-ride", fetchConnections);
        socket.off("get-toggled-ride", fetchConnections);
      }
    };
  }, [rideId, socket, user]);
  return {
    myRide,
    connectedConnections,
    availableConnections,
  };
};

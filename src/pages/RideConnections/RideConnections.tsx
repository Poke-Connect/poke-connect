import React, { FC, useEffect, useState } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";
import { UserAuth } from "context/AuthProvider";
import { getConnectedRideConnections, getRide } from "api/ride";
import { getFilteredRides } from "api/ride";
import { getFilteredRidesTimeNew } from "helpers/getFilteredRidesTimeNew";
import { getConnectedCount } from "./helpers";
import { Socket } from "context/SocketContext";

const RideConnections: FC = () => {
  console.log("recreating component");

  const params = useParams();
  const { rideId } = params;
  const { user } = UserAuth();

  const [myRide, setMyRide] = useState(null);
  const [connectedConnections, setConnectedConnections] = useState([]);
  const [availableConnections, setAvailableConnections] = useState<any>([]);
  const [connectedCount, setConnectedCount] = useState<number>(0);
  const [availableCount, setAvailableCount] = useState<number>(0);
  const [stateRefetch, setStateRefetch] = useState(false);
  const socket = Socket();

  //shift this to custom hook
  useEffect(() => {
    const fetchConnections = async () => {
      console.log("refetching data");
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

    fetchConnections();
  }, [rideId, stateRefetch]);

  useEffect(() => {
    if (!socket) {
      console.log("Socket not found ");
      return;
    }

    // Handle incoming events from the server
    socket.on("connection-added", (data) => {
      // setMessages([...messages, data]);
      console.log("Ride connection socket: Received data from server:", data);
      setStateRefetch(true);
    });
  }, [socket]);

  // const changeConnectionType = (connectionId, connectionObj) => {
  //   setAvailableConnections((prevConnections) => {
  //     prevConnections.filter(
  //       (connection) => connection[0]._id !== connectionId
  //     );
  //   });
  //   // setConnectedConnections((prev) => {
  //   //   [...prev, connectionObj];
  //   // });
  //   setAvailableCount((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  //   setConnectedCount((prev) => prev + 1);
  // };

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

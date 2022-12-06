import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import RideConnectionsLayout from "../RideConnectionsLayout";
import ShowConnectionsHandler from "./ShowConnectionsHandler";
import { UserAuth } from "context/AuthContext";

const AvailableConnections = () => {
  const params = useParams();
  const { rideId } = params;
  const { user } = UserAuth();

  const [myRide, setMyRide] = useState(null);
  const [alreadyConnected, setAlreadyConnected] = useState([]);

  const db = getDatabase();

  const myRideRef = ref(db, `rides/${rideId}`);
  const rideConnectionsRef = ref(db, `ridesConnections/${user.uid}/${rideId}`);

  useEffect(() => {
    onValue(myRideRef, (snapshot) => {
      const data = snapshot.val();
      setMyRide(data);
    });
  }, []);

  useEffect(() => {
    onValue(rideConnectionsRef, (snapshot) => {
      const data = snapshot.val();
      setAlreadyConnected(data);
    });
  }, []);

  return (
    <RideConnectionsLayout rideId={rideId} heading={"Matches Found"}>
      {myRide && (
        <ShowConnectionsHandler
          myRide={myRide}
          alreadyConnected={alreadyConnected}
        />
      )}
    </RideConnectionsLayout>
  );
};

export default AvailableConnections;

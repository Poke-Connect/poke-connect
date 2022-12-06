import React, { useEffect, useState } from "react";
import RideConnectionsLayout from "../RideConnectionsLayout";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthContext";
import ShowRideConnections from "./ShowRideConnections";

const ConnectedConnections = () => {
  const params = useParams();
  const { rideId } = params;

  const { user } = UserAuth();
  const userId = user.uid;

  const [rideConnections, setRideConnections] = useState([]);

  const db = getDatabase();

  const rideConnectionsRef = ref(db, `ridesConnections/${userId}/${rideId}`);

  useEffect(() => {
    onValue(rideConnectionsRef, (snapshot) => {
      const data = snapshot.val();
      setRideConnections(data);
    });
  }, []);

  return (
    <RideConnectionsLayout rideId={rideId} heading={"Connected"}>
      <ShowRideConnections rideConnections={rideConnections} />
    </RideConnectionsLayout>
  );
};

export default ConnectedConnections;

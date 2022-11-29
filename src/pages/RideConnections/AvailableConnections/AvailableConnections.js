import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import RideConnections from "../RideConnections";
import ShowConnectionsHandler from "./ShowConnectionsHandler";

const AvailableConnections = () => {
  const params = useParams();
  const { rideId } = params;
  const [myRide, setMyRide] = useState(null);

  const db = getDatabase();

  const myRideRef = ref(db, `rides/${rideId}`);

  useEffect(() => {
    onValue(myRideRef, (snapshot) => {
      const data = snapshot.val();
      setMyRide(data);
    });
  }, []);

  return (
    <RideConnections rideId={rideId}>
      <div className="pt-20">
        <h1>Available co-passengers </h1>
        {myRide && <ShowConnectionsHandler myRide={myRide} />}
      </div>
    </RideConnections>
  );
};

export default AvailableConnections;

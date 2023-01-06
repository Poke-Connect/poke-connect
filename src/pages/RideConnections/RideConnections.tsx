import React, { FC, useEffect, useState } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthProvider";
import { getObjectLength } from "helpers/utils";

const RideConnections: FC = () => {
  const params = useParams();
  const { rideId } = params;

  const { user } = UserAuth();
  const userId = user?.uid;

  const [connectedConnections, setConnectedConnections] = useState([]);
  const [myRide, setMyRide] = useState(null);

  const db = getDatabase();

  const rideConnectionsRef = ref(db, `ridesConnections/${userId}/${rideId}`);
  const myRideRef = ref(db, `rides/${rideId}`);

  useEffect(() => {
    onValue(rideConnectionsRef, (snapshot) => {
      const data = snapshot.val();
      setConnectedConnections(data);
    });
  }, []);

  useEffect(() => {
    onValue(myRideRef, (snapshot) => {
      const data = snapshot.val();
      setMyRide(data);
    });
  }, []);

  const connectedCount = getObjectLength(connectedConnections);

  return (
    <div className="flex-col flex justify-between ">
      <Outlet context={{ connectedConnections, myRide }} />
      <FooterLayout rideId={rideId} connectedCount={connectedCount} />
    </div>
  );
};

export default RideConnections;

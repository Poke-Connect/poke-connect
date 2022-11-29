import React, { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  ref,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import ShowConnections from "./ShowConnections";

const ShowConnectionsHandler = ({ myRide }) => {
  const [allRides, setAllRides] = useState(null);

  const db = getDatabase();

  const myRideRef = query(
    ref(db, `rides`),
    orderByChild("date"),
    equalTo(myRide.date)
  );

  useEffect(() => {
    onValue(myRideRef, (snapshot) => {
      const data = snapshot.val();
      setAllRides(data);
    });
  }, []);

  if (!myRide) {
    return null;
  }
  return (
    <>
      <ShowConnections allRides={allRides} myRide={myRide} />
    </>
  );
};

export default ShowConnectionsHandler;

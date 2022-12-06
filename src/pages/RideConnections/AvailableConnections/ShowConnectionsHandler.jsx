import React, { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  ref,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import AvailableConnectionsList from "./AvailableConnectionsList";

const ShowConnectionsHandler = (props) => {
  const { myRide, alreadyConnected } = props;
  const [allRides, setAllRides] = useState(null);

  const db = getDatabase();

  const allRidesRef = query(
    ref(db, `rides`),
    orderByChild("date"),
    equalTo(myRide.date)
  );

  useEffect(() => {
    onValue(allRidesRef, (snapshot) => {
      const data = snapshot.val();
      setAllRides(data);
    });
  }, []);

  if (!myRide) {
    return null;
  }
  return (
    <>
      <AvailableConnectionsList
        allRides={allRides}
        myRide={myRide}
        alreadyConnected={alreadyConnected}
      />
    </>
  );
};

export default ShowConnectionsHandler;

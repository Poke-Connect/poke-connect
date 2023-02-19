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
import { getOthersRidesByDate } from "api/ride";

const ShowConnectionsHandler = (props) => {
  const { myRide, alreadyConnected } = props;
  const [allRides, setAllRides] = useState(null);

  const db = getDatabase();

  const allRidesRef = query(
    ref(db, `rides`),
    orderByChild("date"),
    equalTo(myRide.date)
  );

  // useEffect(() => {
  //   onValue(allRidesRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setAllRides(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("running other use effect");
  //   const fetchOtherRides = async () => {
  //     const otherRides = await getOthersRidesByDate();
  //     console.log("Other rides = ", otherRides);
  //   };
  //   fetchOtherRides();
  // }, []);

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

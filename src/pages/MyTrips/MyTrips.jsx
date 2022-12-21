import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthProvider";
import ShowTrips from "./components/ShowTrips";
import Heading from "components/UI/Heading";
import EmptyItem from "components/UI/EmptyItem";

const EMPTY_TRIPS =
  "No trips yet, go to find new connections to create a new trip.";

const MyTrips = () => {
  const { user } = UserAuth();

  const [myTrips, setMyTrips] = useState([]);

  const db = getDatabase();

  const myTripsRef = ref(db, `userRides/${user.uid}`);

  useEffect(() => {
    onValue(myTripsRef, (snapshot) => {
      const data = snapshot.val();
      setMyTrips(data);
    });
  }, []);

  return (
    <div className="pl-6 pr-7 w-screen ">
      <Heading text={"My Trips"} />
      {!myTrips && <EmptyItem text={EMPTY_TRIPS} />}
      <div className="pt-1">{myTrips && <ShowTrips myTrips={myTrips} />}</div>
    </div>
  );
};

export default MyTrips;

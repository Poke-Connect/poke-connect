import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthContext";
import ShowTrips from "./components/ShowTrips";
import Heading from "components/UI/Heading";

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
    <div>
      <Heading text={"My Trips"} />
      <div className="mx-4">{myTrips && <ShowTrips myTrips={myTrips} />}</div>
    </div>
  );
};

export default MyTrips;

import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthContext";
import ShowTrips from "./components/ShowTrips";

const MyTrips = () => {
  const { user } = UserAuth();

  const userId = user.uid;

  const [myTrips, setMyTrips] = useState([]);

  const db = getDatabase();

  const myTripsRef = ref(db, `userRides/${userId}`);

  useEffect(() => {
    onValue(myTripsRef, (snapshot) => {
      const data = snapshot.val();
      setMyTrips(data);
    });
  }, []);
  //Heading component
  return (
    <div>
      <div>
        <h1> My Trips </h1>
      </div>
      <div>
        <ShowTrips myTrips={myTrips} />
      </div>
    </div>
  );
};

export default MyTrips;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import ShowMatches from "./ShowMatches";
import ShowMatchesNew from "./ShowMatchesNew";

const AvailableMatches = () => {
  const params = useParams();
  const { rideId } = params;
  const [ride, setRide] = useState(null);
  const [allRides, setAllRides] = useState([]);

  const db = getDatabase();

  const allRidesRef = ref(db, "rides");

  useEffect(() => {
    onValue(allRidesRef, (snapshot) => {
      const data = snapshot.val();
      setAllRides(data);
      setRide(data[rideId]);
    });
  }, []);

  return (
    <div className="pt-20">
      <h1>Available co-passengers </h1>
      <ShowMatchesNew ride={ride} allRides={allRides} />
    </div>
  );
};

export default AvailableMatches;

//For this request --> how many other requests are matching
//page will be protected and will only exist if the request id belongs to this user

import React from "react";
import TripElement from "./components/TripElement";

const MyTrips = () => {
  return (
    <div>
      <div>
        <h1> My Trips </h1>
      </div>
      <div>
        <h3>Upcoming Trips</h3>
        <TripElement date={"8 Jul"} tripName={"Airport"} upcoming={true} />
      </div>
    </div>
  );
};

export default MyTrips;

import React from "react";
import CompletedTrips from "./CompletedTrips";
import UpcomingTrips from "./UpcomingTrips";
import { getfilteredTrips } from "../helpers";

const ShowTrips = (props) => {
  const { myTrips } = props; //myTrips are rideIds
  if (!myTrips) {
    return null;
  }
  const filteredTrips = getfilteredTrips(myTrips);

  return (
    <div>
      <UpcomingTrips upcomingTrips={filteredTrips[0]} />
      {/* <CompletedTrips completedTrips={filteredTrips[1]} /> */}
    </div>
  );
};

export default ShowTrips;

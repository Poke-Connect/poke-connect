import React from "react";
import TripElement from "./TripElement";

const UpcomingTrips = (props) => {
  const { upcomingTrips } = props;
  return (
    <div>
      UpcomingTrips
      {upcomingTrips.map((rideId) => (
        <TripElement
          key={rideId}
          rideId={rideId}
          onClickHandler={() => {}}
          upcoming={true}
        />
      ))}
    </div>
  );
};

export default UpcomingTrips;

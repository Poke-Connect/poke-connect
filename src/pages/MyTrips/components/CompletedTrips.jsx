import React from "react";
import TripElement from "./TripElement";

const CompletedTrips = (props) => {
  const { completedTrips } = props;

  return (
    <div>
      Completed Trips
      {completedTrips.map((rideId) => (
        <TripElement
          key={rideId}
          rideId={rideId}
          onClickHandler={() => {}}
          upcoming={false}
        />
      ))}
    </div>
  );
};

export default CompletedTrips;

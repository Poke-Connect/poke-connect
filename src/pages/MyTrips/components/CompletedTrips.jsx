import React from "react";
import TripElement from "./TripElement";

const CompletedTrips = (props) => {
  const { completedTrips } = props;

  return (
    <div>
      Completed Trips
      {completedTrips.map((trip) => (
        <TripElement
          location={trip.location}
          date={trip.date}
          onClickHandler={() => {}}
          toggleState={true}
          handleToggleChange={() => {}}
          upcoming={false}
        />
      ))}
    </div>
  );
};

export default CompletedTrips;

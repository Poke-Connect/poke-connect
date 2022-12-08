//STALE_FILE
import React from "react";
import TripElement from "./TripElement";
import SubHeading from "components/UI/SubHeading";

const CompletedTrips = (props) => {
  const { completedTrips } = props;

  return (
    <div className="mt-4">
      <SubHeading text={"Completed Trips"} />
      <div className="mt-4">
        {completedTrips.map((rideId) => (
          <TripElement
            key={rideId}
            rideId={rideId}
            onClickHandler={() => {}}
            upcoming={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTrips;

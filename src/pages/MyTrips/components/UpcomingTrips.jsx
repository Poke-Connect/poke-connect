import React from "react";
import { useNavigate } from "react-router-dom";
import TripElement from "./TripElement";

const UpcomingTrips = (props) => {
  const { upcomingTrips } = props;
  const navigate = useNavigate();
  return (
    <div>
      UpcomingTrips
      {upcomingTrips.map((rideId) => (
        <TripElement
          key={rideId}
          rideId={rideId}
          onClickHandler={() => {
            navigate(`/connections/${rideId}`);
          }}
          upcoming={true}
        />
      ))}
    </div>
  );
};

export default UpcomingTrips;

import SubHeading from "components/UI/SubHeading";
import React from "react";
import { useNavigate } from "react-router-dom";
import TripElement from "./TripElement";

const UpcomingTrips = (props) => {
  const { upcomingTrips } = props;
  const navigate = useNavigate();
  return (
    <div className="mt-4">
      <SubHeading text={"Upcoming Trips"} />
      <div className="mt-4">
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
    </div>
  );
};

export default UpcomingTrips;

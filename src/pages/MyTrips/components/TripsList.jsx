import SubHeading from "components/UI/SubHeading";
import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyItem from "components/UI/EmptyItem";
import TripElement from "./TripElement";

const EMPTY_UPCOMING_TRIPS =
  "No upcoming trips. Go to find new connections to create a new trip.";
const EMPTY_COMPLETED_TRIPS = "No completed trips";

const TripsList = (props) => {
  const { heading, upcoming, tripsList } = props;
  const navigate = useNavigate();

  const isEmpty = tripsList.length === 0 ? true : false;
  const emptyText = upcoming ? EMPTY_UPCOMING_TRIPS : EMPTY_COMPLETED_TRIPS;

  return (
    <div className="mt-2">
      <SubHeading text={heading} />
      {isEmpty && <EmptyItem text={emptyText} />}

      <div className="mt-2">
        {tripsList.map((rideId) => (
          <TripElement
            key={rideId}
            rideId={rideId}
            onClickHandler={
              upcoming
                ? () => {
                    navigate(`/rideconnections/${rideId}/connected`);
                  }
                : null
            }
            upcoming={upcoming}
          />
        ))}
      </div>
    </div>
  );
};

export default TripsList;

import SubHeading from "components/UI/SubHeading";
import React from "react";
import { useNavigate } from "react-router-dom";
import TripElement from "./TripElement";

const TripsList = (props) => {
  const { heading, upcoming, tripsList } = props;
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      <SubHeading text={heading} />
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

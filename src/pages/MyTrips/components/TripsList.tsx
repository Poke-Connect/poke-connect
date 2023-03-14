import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import EmptyItem from "components/UI/EmptyItem";
import TripElement from "./TripElement";
import { EMPTY_STRINGS } from "appConstants";
import { SubHeading } from "components";

interface IProps {
  heading: any;
  upcoming: any;
  tripsList: any;
}

const TripsList: FC<IProps> = (props) => {
  const { heading, upcoming, tripsList } = props;
  const navigate = useNavigate();
  const { UPCOMING_TRIPS, COMPLETED_TRIPS } = EMPTY_STRINGS;

  const isEmpty = tripsList.length === 0 ? true : false;
  const emptyText = upcoming ? UPCOMING_TRIPS : COMPLETED_TRIPS;

  return (
    <div className="mt-2">
      <SubHeading text={heading} />
      {isEmpty && <EmptyItem text={emptyText} />}

      <div className="mt-2">
        {tripsList.map((trip: any) => (
          <TripElement
            key={trip._id}
            rideData={trip}
            onClickHandler={
              upcoming
                ? () => {
                    navigate(`/rideconnections/${trip._id}/connected`);
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

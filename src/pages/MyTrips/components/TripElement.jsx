import React from "react";
import DateTimeElement from "components/DateTimeElement";
import AddressElement from "./AddressElement";
import ToggleElement from "./ToggleElement";
import RideLine from "components/RideLine";

const TripElement = (props) => {
  const { rideData, onClickHandler, upcoming } = props;

  if (!rideData) {
    return null;
  }

  return (
    <div className="flex flex-row py-4 justify-between items-center border-b border-primary gap-3">
      <div onClick={onClickHandler}>
        <DateTimeElement
          date={rideData.date}
          timeStampRide={rideData.timeStampRide}
        />
        <div className="flex flex-row pt-1">
          <RideLine height="s" />
          <AddressElement
            location={rideData.location}
            rideType={rideData.rideType}
          />
        </div>
      </div>
      {upcoming ? (
        <ToggleElement
          rideId={rideData._id}
          discoverability={rideData.discoverability}
        />
      ) : null}
    </div>
  );
};

export default TripElement;

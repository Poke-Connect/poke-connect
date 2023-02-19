import React from "react";
import DateTimeElement from "components/DateTimeElement";
import AddressElement from "./AddressElement";
import ToggleElement from "./ToggleElement";
import RideLine from "components/RideLine";
import { toast } from "react-toastify";
import { toastStrings } from "strings/toastStrings";
import { toggleRideDiscoverability } from "api/ride";

const TripElement = (props) => {
  const { rideData, onClickHandler, upcoming } = props;

  const handleToggleChange = async () => {
    if (!rideData) {
      return;
    }
    try {
      if (rideData.discoverability) {
        toast.success(toastStrings.DISCOVERABILITY_SUCCESS_OFF);
      } else {
        toast.success(toastStrings.DISCOVERABILITY_SUCCESS_ON);
      }
      await toggleRideDiscoverability(rideData._id, !rideData.discoverability);
    } catch (e) {
      toast.error(toastStrings.ERROR);
    }
  };

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
          discoverability={rideData.discoverability}
          handleToggleChange={handleToggleChange}
        />
      ) : null}
    </div>
  );
};

export default TripElement;

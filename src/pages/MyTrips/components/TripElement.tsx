import React, { FC } from "react";
import AddressElement from "./AddressElement";
import ToggleElement from "./ToggleElement";
import { RideLine } from "components";
import { DateTimeElement } from "containers";

interface IProps {
  rideData: any;
  onClickHandler: any;
  upcoming: any;
}

const TripElement: FC<IProps> = (props) => {
  const { rideData, onClickHandler, upcoming } = props;

  if (!rideData) {
    return null;
  }

  const {
    _id,
    date,
    timeStampRide,
    from = "",
    location,
    rideType,
    discoverability,
  } = rideData;

  return (
    <div className="flex flex-row py-4 justify-between items-center border-b border-primary gap-3">
      <div onClick={onClickHandler}>
        <DateTimeElement date={date} timeStampRide={timeStampRide} />
        <div className="flex flex-row pt-1">
          <div className="flex flex-row mt-1">
            <RideLine height="s" />
          </div>
          <AddressElement from={from} location={location} rideType={rideType} />
        </div>
      </div>
      {upcoming ? (
        <ToggleElement rideId={_id} discoverability={discoverability} />
      ) : null}
    </div>
  );
};

export default TripElement;

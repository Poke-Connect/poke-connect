import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";
import DateTimeElement from "components/DateTimeElement";
import AddressElement from "./AddressElement";
import ToggleElement from "./ToggleElement";
import RideLine from "components/RideLine";

const TripElement = (props) => {
  const { rideId, onClickHandler, upcoming } = props;

  const [rideData, setRideData] = useState(null);

  const db = getDatabase();

  const myTripRef = ref(db, `rides/${rideId}`);

  useEffect(() => {
    onValue(myTripRef, (snapshot) => {
      const data = snapshot.val();
      setRideData(data);
    });
  }, []);

  const handleToggleChange = () => {
    if (!rideData) {
      return;
    }
    update(myTripRef, {
      discoverability: !rideData.discoverability,
    });
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

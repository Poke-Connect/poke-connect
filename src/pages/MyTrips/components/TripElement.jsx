import React, { useState, useEffect } from "react";
import ToggleElement from "../../../components/ToggleElement";
import { getDatabase, onValue, ref, update } from "firebase/database";

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
    <div>
      <div
        className="flex flex-row py-8 px-2 justify-between items-center border-b border-lightGreen gap-3"
        onClick={onClickHandler}
      >
        <div className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center">
          {rideData.date}
        </div>
        <div className="info flex-auto">
          <div className="text-base font-semibold flex justify-start">
            {rideData.location}
          </div>
        </div>
        <div className="date flex-none flex justify-end font-medium text-sm text-lightGray2">
          {upcoming ? (
            <ToggleElement
              toggleState={rideData.discoverability}
              handleToggleChange={handleToggleChange}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TripElement;

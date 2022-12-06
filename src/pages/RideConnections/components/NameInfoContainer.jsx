import React from "react";
import { createLocationString, getDistanceInKm } from "helpers/utils";
import { getTimeInMins } from "helpers/dateHelper";

const NameInfoContainer = (props) => {
  const { displayName, location, timeDiff, distDiff } = props;

  return (
    <div id="nameInfoContainer" className="info flex-col">
      <div className="text-base font-semibold flex justify-start">
        {displayName}
      </div>

      <div className="text-xs font-light text-typeText flex flex-col">
        <p>{`Pickup: ${createLocationString(location)}`}</p>
        <p>{`Distance between pickups: ${getDistanceInKm(distDiff)}km`}</p>
        <p>{`Extra time travel: ${getTimeInMins(timeDiff)} mins`}</p>
      </div>
    </div>
  );
};

export default NameInfoContainer;

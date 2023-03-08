import React from "react";
import {
  createLocationString,
  getDistanceInKm,
  capitaliseName,
} from "helpers/utils";
import { getTimeInMins } from "helpers/dateHelper";

const NameInfoContainer = (props) => {
  const {
    displayName = "",
    location = "",
    timeDiff = "",
    distDiff = "",
  } = props;

  return (
    <div id="nameInfoContainer" className="flex-col max-w-[90%]">
      <div className="text-base font-semibold flex justify-start">
        <p className="text-ellipsis overflow-hidden line-clamp-1">
          {capitaliseName(displayName)}
        </p>
      </div>

      <div className="text-sm font-normal text-typeText flex flex-col">
        <p className="text-ellipsis overflow-hidden line-clamp-1">{`Pickup: ${createLocationString(
          location
        )}`}</p>
        <p className="text-ellipsis overflow-hidden line-clamp-1">{`Dist b/w pickups: ${getDistanceInKm(
          distDiff
        )}km`}</p>
        <p className="text-ellipsis overflow-hidden line-clamp-1">{`Extra time travel: ${getTimeInMins(
          timeDiff
        )} mins`}</p>
      </div>
    </div>
  );
};

export default NameInfoContainer;

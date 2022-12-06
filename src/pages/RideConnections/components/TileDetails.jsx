import React from "react";
import { createTimeStringFromTimeStamp } from "helpers/dateHelper";
import PicContainer from "components/PicContainer";
import NameInfoContainer from "./NameInfoContainer";

const TileDetails = (props) => {
  const {
    displayName = "",
    photoURL = "",
    location = "",
    timeDiff = "",
    distDiff = "",
    timeStampRide = "",
    onClickHandler,
  } = props;

  return (
    <div
      id="clickContainer"
      className="flex flex-row py-8 px-2 justify-between items-center border-b border-lightGreen gap-3"
      onClick={onClickHandler}
    >
      <PicContainer photoURL={photoURL} alt={displayName[0]} />
      <NameInfoContainer
        displayName={displayName}
        location={location}
        timeDiff={timeDiff}
        distDiff={distDiff}
      />
      <div
        id="rideTime"
        className="flex justify-end font-medium text-sm text-typeText"
      >
        {createTimeStringFromTimeStamp(timeStampRide)}
      </div>
    </div>
  );
};

export default TileDetails;

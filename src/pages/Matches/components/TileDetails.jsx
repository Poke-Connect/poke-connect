import React from "react";
import { createLocationString } from "../helpers";
import {
  createTimeStringFromTimeStamp,
  getTimeInMins,
} from "../../../helpers/dateHelper";

const TileDetails = (props) => {
  const {
    photoURL = "",
    displayName = "",
    location = "",
    timeDiff = "",
    time = "",
  } = props;

  return (
    <>
      <div id="profileNameContainer">
        <div
          id="profilePicContainer"
          className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center"
        >
          <img
            src={photoURL}
            alt={displayName[0]}
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div id="detailsContainer" className="info flex-auto">
          <div className="text-base font-semibold flex justify-start">
            {displayName}
          </div>
          <div className="text-xs font-light text-lightGray3 flex justify-start">
            {createLocationString(location)}
          </div>
        </div>
      </div>
      <div
        id="extraTime"
        className="date flex-none flex justify-end font-medium text-sm text-lightGray2"
      >
        {createTimeStringFromTimeStamp(time)}
      </div>
      <div
        id="extraTime"
        className="date flex-none flex justify-end font-medium text-sm text-lightGray2"
      >
        {`extra time = ${getTimeInMins(timeDiff)} mins`}
      </div>
    </>
  );
};

export default TileDetails;

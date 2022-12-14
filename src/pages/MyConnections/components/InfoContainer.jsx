import React from "react";
import { createLocationString, capitaliseName } from "helpers/utils";

const InfoContainer = (props) => {
  const { onClickHandler, displayName, location, rideDate } = props;
  return (
    <div
      id="infoContainer"
      onClick={onClickHandler}
      className="flex flex-row justify-between items-center w-full px-1"
    >
      <div className="info flex-col pl-2 w-[70%]">
        <div className="text-black font-semibold flex justify-start text-lg">
          <p className="text-ellipsis overflow-hidden line-clamp-1">
            {capitaliseName(displayName)}
          </p>
        </div>
        <div className="text-sm font-light text-typeText flex justify-start ">
          <p className="text-ellipsis overflow-hidden line-clamp-1">
            {createLocationString(location)}
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-end text-sm text-typeText font-normal px-1 ">
        {rideDate}
      </div>
    </div>
  );
};

export default InfoContainer;

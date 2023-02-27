import React from "react";
import { createTimeStringFromTimeStamp } from "helpers/dateHelper";
import PicContainer from "components/PicContainer";
import NameInfoContainer from "./NameInfoContainer";
import { useNavigate } from "react-router-dom";

const TileDetails = (props) => {
  const {
    displayName = "",
    photoURL = "",
    location = "",
    timeDiff = "",
    distDiff = "",
    timeStampRide = "",
    userId = "",
    onClickHandler,
  } = props;

  const navigate = useNavigate();

  const onPhotoClickHandler = () => {
    userId && navigate(`/user/${userId}`);
  };

  return (
    <div
      id="clickContainer"
      className="flex flex-row py-8 justify-between items-center border-b border-primary "
    >
      <PicContainer
        photoURL={photoURL}
        alt={displayName[0]}
        onClickHandler={onPhotoClickHandler}
      />
      <div
        onClick={onClickHandler}
        className="flex  w-full pl-4 justify-between pr-2"
      >
        <NameInfoContainer
          displayName={displayName}
          location={location}
          timeDiff={timeDiff}
          distDiff={distDiff}
        />
        <div
          id="rideTime"
          className="flex justify-end font-normal text-sm text-typeText ml-2 items-center "
        >
          <p className=" text-end">
            {createTimeStringFromTimeStamp(timeStampRide)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TileDetails;

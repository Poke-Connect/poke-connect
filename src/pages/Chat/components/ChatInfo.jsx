import React from "react";
import Smiley from "assets/icons/Smiley";

const ChatInfo = (props) => {
  return (
    <div className="bg-primary">
      <div id="profileNameContainer">
        <div
          id="profilePicContainer"
          className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center"
        >
          <Smiley className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
        <div id="detailsContainer" className="info flex-auto">
          <div className="text-base font-semibold flex justify-start">
            {"Ashish Jain"}
          </div>
          <div className="text-xs font-light text-lightGray3 flex justify-start">
            {"Ambience Diva"}
          </div>
        </div>
      </div>
      <div
        id="rideTime"
        className="date flex-none flex justify-end font-medium text-sm text-lightGray2"
      >
        {"time"}
      </div>
    </div>
  );
};

export default ChatInfo;

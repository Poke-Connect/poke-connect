import React from "react";
import { UserChat } from "context/ChatContext";
import ImageContainer from "components/UI/ImageContainer";

//TODO: Add rideinfo(location,time)
const ChatInfo = () => {
  const { data } = UserChat();

  return (
    <div className="bg-primary">
      <div id="userInfoContainer">
        <ImageContainer
          photoURL={data.user.photoURL}
          alt={data.user.displayName[0]}
          dimension={10}
        />
        <div className="text-base font-semibold flex justify-start">
          {data.user.displayName}
        </div>
      </div>
      {/* <div id="rideInfoContainer">
        <div className="text-xs font-light text-lightGray3 flex justify-start">
          {"Ambience Diva"}
        </div>
        <div
          id="rideTime"
          className="date flex-none flex justify-end font-medium text-sm text-lightGray2"
        >
          {"time"}
        </div>
      </div> */}
    </div>
  );
};

export default ChatInfo;

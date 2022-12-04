import React from "react";
import { UserChat } from "context/ChatContext";
import ImageContainer from "components/UI/ImageContainer";
import { useNavigate } from "react-router-dom";

//TODO: Add rideinfo(location,time)
const ChatInfo = () => {
  const { data } = UserChat();
  const { uid, displayName, photoURL } = data.user;
  const navigate = useNavigate();

  const onClickHandler = () => {
    uid && navigate(`/user/${uid}`);
  };

  return (
    <div className="bg-primary">
      <div id="userInfoContainer" onClick={onClickHandler}>
        <ImageContainer
          photoURL={photoURL}
          alt={displayName[0]}
          dimension={10}
        />
        <div className="text-base font-semibold flex justify-start">
          {displayName}
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

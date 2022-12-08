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
    <div className="bg-primary-light px-9 pt-4 pb-3  text-left left-0 right-0 max-w-xl mx-auto z-5">
      <div
        id="userInfoContainer"
        className="flex flex-row "
        onClick={onClickHandler}
      >
        <ImageContainer
          photoURL={photoURL}
          alt={displayName[0]}
          dimension={10}
        />
        <div className="chat-details flex flex-col pt-2 pl-2">
          <div className="text-base font-semibold">{displayName}</div>
          {/* <div className="font-normal text-sm">Bangalore Airport</div>
          <div className="date-time flex font-light text-sm gap-4">
            <span className="date">7 Sep</span>{" "}
            <span className="time"> 13:00</span>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;

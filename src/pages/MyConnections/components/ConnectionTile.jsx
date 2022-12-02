import React from "react";
import { UserChat } from "context/ChatContext";
import { useNavigate } from "react-router-dom";

const ConnectionTile = ({ connectionId, connectionData }) => {
  const {
    displayName = "",
    photoURL = "",
    // email = "",
  } = connectionData.userInfo;

  const navigate = useNavigate();

  const { dispatch } = UserChat();

  const { location = "" } = connectionData.rideInfo;

  const onClickHandler = () => {
    dispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: connectionData.userInfo, chatId: connectionId },
    });
    console.log("chatid", connectionId);
    navigate(`/chat/${connectionId}`);
  };

  return (
    <div>
      <div
        className="flex flex-row py-8 px-2 justify-between items-center border-b border-lightGreen gap-3"
        onClick={onClickHandler}
      >
        <div className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center">
          <img
            src={photoURL}
            alt={displayName[0]}
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="info flex-auto">
          <div className="text-base font-semibold flex justify-start">
            {displayName}
          </div>
          <div className="text-xs font-light text-lightGray3 flex justify-start">
            {location}
          </div>
        </div>
        {/* <div className="date flex-none flex justify-end font-medium text-sm text-lightGray2">
          {connectionData.date}
        </div> */}
      </div>
    </div>
  );
};

export default ConnectionTile;

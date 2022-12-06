import React from "react";
import { UserChat } from "context/ChatContext";
import { useNavigate } from "react-router-dom";
import PicContainer from "components/PicContainer";
import { createLocationString } from "helpers/utils";
import { createDateFromTimeStamp } from "helpers/dateHelper";

const ConnectionElement = (props) => {
  const { connectionId, connectionData } = props;
  const { displayName = "", photoURL = "" } = connectionData.userInfo;
  const { location = "" } = connectionData.rideInfo;

  const navigate = useNavigate();

  const { dispatch } = UserChat();

  const onClickHandler = () => {
    dispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: connectionData.userInfo, chatId: connectionId },
    });
    console.log("chatid", connectionId);
    navigate(`/chat/${connectionId}`);
  };

  return (
    <div
      className="flex flex-row py-8 px-2 justify-between items-center border-b border-primary gap-3"
      onClick={onClickHandler}
    >
      <PicContainer src={photoURL} alt={displayName[0]} />
      <div className="info flex-col">
        <div className="text-black font-semibold flex justify-start">
          {displayName}
        </div>
        <div className="text-xs font-light text-typeText flex justify-start">
          {createLocationString(location)}
        </div>
      </div>
      <div className="date flex-none flex justify-end font-medium text-sm text-typeText">
        {createDateFromTimeStamp(connectionData.date.seconds)}
      </div>
    </div>
  );
};

export default ConnectionElement;

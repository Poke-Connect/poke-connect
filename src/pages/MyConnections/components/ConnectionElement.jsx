import React from "react";
import { UserChat } from "context/ChatContext";
import { useNavigate } from "react-router-dom";
import PicContainer from "components/PicContainer";
import { createDateStringTrip } from "helpers/dateHelper";
import InfoContainer from "./InfoContainer";

const ConnectionElement = (props) => {
  const { connectionId, connectionData } = props;
  const { displayName = "", photoURL = "", uid } = connectionData.userInfo;
  const { location = "" } = connectionData.rideInfo;

  const navigate = useNavigate();

  const { dispatch } = UserChat();

  const onClickHandler = () => {
    dispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: connectionData.userInfo, chatId: connectionId },
    });
    navigate(`/chat/${connectionId}`);
  };

  const rideDate = connectionData.rideInfo.date
    ? createDateStringTrip(connectionData.rideInfo.date)
    : "No Date";

  const onPhotoClickHandler = () => {
    uid && navigate(`/user/${uid}`);
  };

  return (
    <div className="flex flex-row py-8 pl-2 justify-between items-center border-b border-primary gap-3 ">
      <div className="flex flex-row justify-start w-full">
        <PicContainer
          photoURL={photoURL}
          alt={displayName[0]}
          onClickHandler={onPhotoClickHandler}
        />
        <InfoContainer
          onClickHandler={onClickHandler}
          displayName={displayName}
          location={location}
          rideDate={rideDate}
        />
      </div>
    </div>
  );
};

export default ConnectionElement;

import React from "react";
import { UserChat } from "context/ChatContext";
import { useNavigate } from "react-router-dom";
import PicContainer from "components/PicContainer";
import { createDateStringTrip } from "helpers/dateHelper";
import InfoContainer from "./InfoContainer";

const ConnectionElement = (props) => {
  const { connection } = props;
  const { updatedAt, userInfo, lastMessage } = connection;
  const { displayName = "", photoURL = "", _id: userId = "" } = userInfo;

  const navigate = useNavigate();

  // const { dispatch } = UserChat();

  const onClickHandler = () => {
    // dispatch({
    //   type: "CHANGE_USER_CHAT",
    //   payload: { user: connectionData.userInfo, chatId: connectionId },
    // });
    // navigate(`/chat/${connectionId}`);
  };

  // const rideDate = connectionData.rideInfo.date
  //   ? createDateStringTrip(connectionData.rideInfo.date)
  //   : "No Date";

  const onPhotoClickHandler = () => {
    userId && navigate(`/user/${userId}`);
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
          date={updatedAt}
          lastMessage={lastMessage}
        />
      </div>
    </div>
  );
};

export default ConnectionElement;

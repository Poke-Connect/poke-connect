import React from "react";
import { UserChat } from "context/ChatContext";
import { useNavigate } from "react-router-dom";
import PicContainer from "components/PicContainer";
import InfoContainer from "./InfoContainer";

const ConnectionElement = (props) => {
  const { connection } = props;
  const { _id: connectionId, updatedAt, userInfo, lastMessage } = connection;
  const { displayName = "", photoURL = "", _id: userId = "" } = userInfo;

  const navigate = useNavigate();

  const { dispatch } = UserChat();

  const onClickHandler = () => {
    dispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: userInfo, chatId: connectionId },
    });
    navigate(`/chat/${connectionId}`);
  };

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

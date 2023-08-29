import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import InfoContainer from "./InfoContainer";
import { PicConnectionContainer } from ".";
import { changeUserChat } from "features/chat/chatSlice";
import { useAppDispatch } from "hooks";

interface IProps {
  connection: any;
}

const ConnectionElement: FC<IProps> = (props) => {
  const { connection } = props;
  const { _id: connectionId, updatedAt, userInfo, lastMessage } = connection;
  const { displayName = "", photoURL = "", _id: userId = "" } = userInfo;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(changeUserChat({ chatId: connectionId, chatUser: userInfo }));
    navigate(`/chat/${connectionId}`);
  };

  const onPhotoClickHandler = () => {
    userId && navigate(`/user/${userId}`);
  };

  return (
    <div className="flex flex-row py-8 pl-2 justify-between items-center border-b border-primary gap-3  ">
      <div className="flex flex-row justify-start w-full ">
        <PicConnectionContainer
          userId={userId}
          photoURL={photoURL}
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

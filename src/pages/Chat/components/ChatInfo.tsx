import React, { FC } from "react";
import ImageContainer from "components/UI/ImageContainer";
import { useNavigate } from "react-router-dom";

interface IProps {
  userId: string;
  displayName: string;
  photoURL?: string;
}

const ChatInfo: FC<IProps> = (props) => {
  const { userId, displayName, photoURL } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    userId && navigate(`/user/${userId}`);
  };

  return (
    <div className="bg-primary-light px-9 py-2 jusify-between items-center ">
      <div
        id="userInfoContainer"
        className="flex flex-row"
        onClick={onClickHandler}
      >
        <ImageContainer
          photoURL={photoURL}
          alt={displayName[0]}
          dimension={10}
        />
        <div className="chat-details pt-2 pl-2">
          <div className="text-base font-semibold">{displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;

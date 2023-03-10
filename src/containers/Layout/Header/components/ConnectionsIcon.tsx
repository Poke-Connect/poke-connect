import React, { FC } from "react";
import ChatIcon from "assets/icons/ChatIcon";
import { useNavigate } from "react-router-dom";
import CountIcon from "./CountIcon";
import { useAppSelector } from "hooks";

const ConnectionsIcon: FC = () => {
  const navigate = useNavigate();

  const { unreadCount } = useAppSelector((store) => store.conversations);

  const onClickHandler = () => {
    navigate(`/connections`);
  };

  return (
    <div className="relative mr-4 " onClick={onClickHandler}>
      <ChatIcon />
      {unreadCount > 0 && <CountIcon count={unreadCount} />}
    </div>
  );
};

export default ConnectionsIcon;

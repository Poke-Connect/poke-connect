import React, { FC, useState } from "react";
import ChatIcon from "assets/icons/ChatIcon";
import { useNavigate } from "react-router-dom";
import CountIcon from "./CountIcon";

const ConnectionsIcon: FC = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState<number | any>(0);

  const onClickHandler = () => {
    navigate(`/connections`);
  };

  return (
    <div className="relative mr-4 " onClick={onClickHandler}>
      <ChatIcon />

      {count > 0 && <CountIcon count={count} />}
    </div>
  );
};

export default ConnectionsIcon;

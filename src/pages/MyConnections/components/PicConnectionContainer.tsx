import React, { FC } from "react";
import { useAppSelector } from "hooks";

interface IProps {
  userId: string;
  photoURL: string;
  onClickHandler: () => void;
}

const PicConnectionContainer: FC<IProps> = (props) => {
  const { userId, photoURL, onClickHandler } = props;

  const { currentOnlineUsers } = useAppSelector((store) => store.onlineUsers);
  const online = currentOnlineUsers.includes(userId);

  return (
    <>
      <div className="relative inline-block w-14 h-14" onClick={onClickHandler}>
        <img
          src={photoURL}
          alt="Profile"
          className="rounded-full w-12 h-12 shadow"
        />
        <span
          className={`absolute bottom-2 right-0 block h-4 w-4 rounded-full border-2 ${
            online
              ? "bg-green-500 border-green-500"
              : "bg-gray-400 border-gray-400"
          }`}
        ></span>
      </div>
    </>
  );
};

export default PicConnectionContainer;

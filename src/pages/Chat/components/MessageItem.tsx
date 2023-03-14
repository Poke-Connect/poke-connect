import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IProps {
  message: any;
}

const MessageItem: FC<IProps> = (props) => {
  const { message } = props;
  const { senderId, text } = message;
  const { user } = useSelector((store: any) => store.auth);

  const bgColor =
    user._id === senderId
      ? "bg-primary-lighter ml-auto"
      : "bg-lightGray mr-auto";

  return (
    <div
      className={`${bgColor} flex-1 py-1 px-4 m-2 text-sm max-w-3/5 rounded-xl`}
    >
      <div>{text}</div>
    </div>
  );
};

export default MessageItem;

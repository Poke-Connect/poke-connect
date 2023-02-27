import React from "react";
import { useSelector } from "react-redux";

const MessageItem = ({ message }) => {
  const { senderId, text } = message;
  const { user } = useSelector((store) => store.auth);

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

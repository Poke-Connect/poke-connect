import React, { useEffect, useRef } from "react";
import { UserAuth } from "context/AuthProvider";

const MessageItem = ({ message }) => {
  const { senderId, text } = message;

  const ref = useRef();

  const { user } = UserAuth();

  const bgColor =
    user.uid === senderId ? "bg-primary-lighter ml-auto" : "bg-lightGray mr-auto";

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${bgColor} flex-1 py-1 px-4 m-2 text-sm max-w-3/5 rounded-xl`}
    >
      <div>{text}</div>
    </div>
  );
};

export default MessageItem;

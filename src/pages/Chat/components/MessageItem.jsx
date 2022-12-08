import React, { useEffect, useRef } from "react";
import { UserAuth } from "context/AuthContext";

const MessageItem = ({ message }) => {
  const { senderId, text } = message;

  const ref = useRef();

  const { user } = UserAuth();

  const bgColor = user.uid === senderId ? "bg-primary mr-auto" : "bg-lightGray ml-auto";

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${bgColor} flex-1 py-2 px-5 m-2 text-sm max-w-3/5 rounded-lg`}
    >
      <div className="">{text}</div>
    </div>
  );
};

export default MessageItem;

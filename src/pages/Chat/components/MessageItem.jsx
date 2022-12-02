import React, { useEffect, useRef } from "react";
import { UserAuth } from "context/AuthContext";

const MessageItem = ({ message }) => {
  const { senderId, text } = message;

  const ref = useRef();

  const { user } = UserAuth();

  const bgColor = user.uid === senderId ? "bg-primary" : "bg-lightGray";

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${bgColor} flex-1 p-2 m-2 text-sm w-auto rounded-lg`}
    >
      <div className="flex-1 w-3/6 item-end  justify-self-end">{text}</div>
    </div>
  );
};

export default MessageItem;

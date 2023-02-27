import React, { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";

const MessagesList = (props) => {
  const { messages } = props;

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      id="container"
      className="flex flex-col px-4 pt-5 pb-20 overflow-y-auto"
    >
      {messages.map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
      <div ref={ref} />
    </div>
  );
};

export default MessagesList;

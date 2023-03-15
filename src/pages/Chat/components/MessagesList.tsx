import React, { FC, useEffect, useRef } from "react";
import MessageItem from "./MessageItem";

interface IProps {
  messages: any[];
}

const MessagesList: FC<IProps> = (props) => {
  const { messages } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      id="container"
      className="flex flex-col px-4 pt-5 pb-20 overflow-y-auto"
    >
      {messages &&
        messages.map((message: any) => (
          <MessageItem key={message._id} message={message} />
        ))}
      <div ref={ref} />
    </div>
  );
};

export default MessagesList;

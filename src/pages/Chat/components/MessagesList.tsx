import React, { FC } from "react";
import MessageItem from "./MessageItem";

interface IProps {
  messages: any[];
}

const MessagesList: FC<IProps> = (props) => {
  const { messages } = props;
  if (!messages || messages.length === 0) {
    return null;
  }
  return (
    <div
      id="container"
      className="flex flex-col px-4 pt-5 pb-10 overflow-y-scroll"
    >
      {messages.map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;

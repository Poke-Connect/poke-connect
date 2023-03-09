import React, { FC } from "react";
import { ChatInfo, InputContainer, MessagesList } from ".";

interface IProps {
  otherUser: any;
  messages: any;
  selfId: string;
  setMessages: any;
  connectionId: string;
}

const ChatLayout: FC<IProps> = (props) => {
  const { otherUser, messages, selfId, setMessages, connectionId } = props;

  return (
    <>
      <ChatInfo
        userId={otherUser._id}
        displayName={otherUser.displayName}
        photoURL={otherUser.photoURL}
      />
      <MessagesList messages={messages} />
      <InputContainer
        connectionId={connectionId}
        selfId={selfId}
        otherUserId={otherUser._id}
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
};

export default ChatLayout;

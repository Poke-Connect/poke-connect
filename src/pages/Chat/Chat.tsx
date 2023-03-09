import React, { FC } from "react";
import { UserChat } from "context/ChatContext";
import { useSelector } from "react-redux";
import ChatLayout from "./components/ChatLayout";
import { useChatSocket, useChatsFetch } from "customHooks";

const Chat: FC = () => {
  const { user: selfUser } = useSelector((store: any) => store.auth);
  const { data } = UserChat();
  const { user: otherUser, chatId } = data;

  const { messages, setMessages } = useChatsFetch(chatId);
  useChatSocket(chatId, setMessages);

  return (
    <div className="flex flex-col w-screen h-full">
      <ChatLayout
        otherUser={otherUser}
        selfId={selfUser._id}
        messages={messages}
        setMessages={setMessages}
        connectionId={chatId}
      />
    </div>
  );
};

export default Chat;

/**TEST CASES:
 * UI
 *  - Empty message list
 *  - scrollable message list
 *  - 1-2 messages
 */

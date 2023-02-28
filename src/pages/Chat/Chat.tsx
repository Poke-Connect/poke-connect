import React, { FC, useEffect, useState } from "react";
import { UserChat } from "context/ChatContext";
import { getConnectionMessages } from "api/messages";
import { useSelector } from "react-redux";
import ChatLayout from "./components/ChatLayout";
import { Socket } from "context/SocketContext";

const Chat: FC = () => {
  const { user: selfUser } = useSelector((store: any) => store.auth);

  const { data } = UserChat();
  const { user: otherUser, chatId } = data;
  const socket = Socket();

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    let mounted = true;

    const receiveMessage = (data) => {
      if (mounted) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    };

    if (socket) {
      socket.on("receive-message", receiveMessage);
    }

    const fetchConnectionMessages = async () => {
      const connectionMessages = await getConnectionMessages(chatId);
      setMessages(connectionMessages);
    };

    chatId && fetchConnectionMessages();

    return () => {
      mounted = false;

      if (socket) {
        socket.off("receive-message", receiveMessage);
      }
    };
  }, [chatId, socket]);

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

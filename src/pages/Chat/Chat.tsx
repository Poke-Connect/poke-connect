import React, { FC, useEffect, useState } from "react";
import ChatInfo from "./components/ChatInfo";
import InputContainer from "./components/InputContainer";
import MessagesList from "./components/MessagesList";
import { UserChat } from "context/ChatContext";
import { getConnectionMessages } from "api/messages";
import { UserAuth } from "context/AuthProvider";
import { Socket } from "context/SocketContext";

const Chat: FC = () => {
  const { user: selfUser } = UserAuth();
  const { data } = UserChat();
  const { user: otherUser, chatId } = data;

  const [messages, setMessages] = useState<any>([]);
  const socket = Socket();

  useEffect(() => {
    if (!socket) {
      console.log("Socket not found ");
      return;
    }

    // Handle incoming events from the server
    socket.on("receive-message", (data) => {
      setMessages([...messages, data]);
      console.log("Received data from server:", data);
    });
  }, [socket]);

  useEffect(() => {
    const fetchConnectionMessages = async () => {
      const connectionMessages = await getConnectionMessages(chatId);
      setMessages(connectionMessages);
    };
    chatId && fetchConnectionMessages();
  }, [chatId]);

  return (
    <div className="flex flex-col fixed w-screen h-full ">
      <div className=" flex h-[90%] ">
        <div id="chatPage" className="w-full h-full">
          <div id="chatContainer" className="flex-col h-full">
            <ChatInfo
              userId={otherUser._id}
              displayName={otherUser.displayName}
              photoURL={otherUser.photoURL}
            />
            <div className="h-[83%] overflow-y-scroll">
              <MessagesList messages={messages} />
            </div>
            <InputContainer
              connectionId={chatId}
              selfId={selfUser._id}
              socket={socket}
              otherUserId={otherUser._id}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatLayout from "./components/ChatLayout";
import { useChatSocket, useChatsFetch } from "customHooks";
import { useNavigate, useParams } from "react-router-dom";
import { getLocalChat } from "helpers/helpersAuth";
import { changeUserChat } from "features/chat/chatSlice";
import { useAppDispatch } from "hooks";

const Chat: FC = () => {
  const { user: selfUser } = useSelector((store: any) => store.auth);
  const dispatch = useAppDispatch();

  const data = useSelector((store: any) => store.chat);
  const { chatUser: otherUser } = data;

  const navigate = useNavigate();
  const { chatId = "" } = useParams();

  const { messages, setMessages } = useChatsFetch(chatId);
  useChatSocket(chatId, setMessages);

  if (!chatId || chatId === "") {
    navigate(-1);
  }

  useEffect(() => {
    const localChatData = getLocalChat();
    if (localChatData) {
      dispatch(changeUserChat(localChatData));
    }
  }, [dispatch]);

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

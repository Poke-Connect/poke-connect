import React, { useEffect, useState } from "react";
import { UserChat } from "context/ChatContext";
import MessageItem from "./MessageItem";
import { onSnapshot, doc } from "firebase/firestore";
import { fireStoreDb } from "firebaseConfig";

const MessagesList = () => {
  const { data } = UserChat();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(fireStoreDb, "chats", data.chatId), (res) => {
      res.exists() && setMessages(res.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div id="container" className="flex-col flex-1">
      {messages.map((message) => (
        <MessageItem key={message.message.id} message={message.message} />
      ))}
    </div>
  );
};

export default MessagesList;

import { getConnectionMessages } from "api/messages";
import { useEffect, useState } from "react";

export const useChatsFetch = (chatId: string | null) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const fetchConnectionMessages = async () => {
      const connectionMessages = await getConnectionMessages(chatId);
      setMessages(connectionMessages);
    };
    chatId && fetchConnectionMessages();
  }, [chatId]);

  return {
    messages,
    setMessages,
  };
};

import { useEffect } from "react";
import { useSocket } from "context/SocketContext";

export const useChatSocket = (chatId: string, setMessages: Function) => {
  const socket = useSocket();

  useEffect(() => {
    let mounted = true;

    const receiveMessage = (data: any) => {
      if (mounted) {
        setMessages((prevMessages: any) => [...prevMessages, data]);
      }
    };

    if (socket) {
      socket.on("receive-message", receiveMessage);
    }

    return () => {
      mounted = false;

      if (socket) {
        socket.off("receive-message", receiveMessage);
      }
    };
  }, [socket, setMessages, chatId]);
};

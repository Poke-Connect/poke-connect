import { getUserConnections } from "api/connection";
import { filterConnections } from "pages/MyConnections/helper";
import { useState, useEffect } from "react";
import { useSocket } from "context/SocketContext";

export const useMyConnections = (userId: any) => {
  const [myConnections, setMyConnections] = useState<any>(null);
  const socket = useSocket();

  useEffect(() => {
    const fetchConnections = async () => {
      const userConnections = await getUserConnections(userId);
      const connections = filterConnections(userConnections, userId);
      setMyConnections(connections);
    };

    if (socket) {
      socket.on("receive-message", fetchConnections);
    }

    userId && fetchConnections();

    return () => {
      if (socket) {
        socket.off("receive-message", fetchConnections);
      }
    };
  }, [userId, socket]);

  return myConnections;
};

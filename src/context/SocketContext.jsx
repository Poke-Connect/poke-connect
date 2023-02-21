import React, { createContext, useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { SERVER_URL } from "config/serverConfig";
import { UserAuth } from "context/AuthProvider";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = UserAuth();

  useEffect(() => {
    const newSocket = io(SERVER_URL, { withCredentials: true });

    newSocket.on("connect", () => {
      console.log("Connected to server");
      setSocket(newSocket);

      // Add User to the server
      if (user) {
        newSocket.emit("add-user", user._id);
      }
    });

    return () => {
      // Disconnect the socket when the component unmounts
      newSocket.disconnect();
      console.log("Socket disconnected!");
    };
  }, [user]);

  useEffect(() => {
    // Get all connected users from server
    socket?.on("get-users", (data) => {
      console.log("Received users from server:", data);
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const Socket = () => {
  return useContext(SocketContext);
};

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import io, { Socket } from "socket.io-client";
import { SERVER_URL } from "config/serverConfig";
import { incrementUnreadCount } from "features/conversations/conversationsSlice";
import { createOnlineUsersArray } from "helpers/createOnlineUsersArray";
import { setOnlineUsers } from "features/onlineUsers/onlineUsersSlice";
import { useAppDispatch, useAppSelector } from "hooks";

export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider = ({ children }) => {
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = io(SERVER_URL, { withCredentials: true });
    socketRef.current.emit("add-user", user._id);
    setSocketInstance(socketRef.current);
    return () => {
      socketRef.current?.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (!socketInstance) {
      return;
    }
    // Get all connected users from server
    socketInstance.on("get-users", (data) => {
      const onlineUsers = createOnlineUsersArray(data);
      dispatch(setOnlineUsers(onlineUsers));
    });

    socketInstance.on("connection-added", (_data) => {
      dispatch(incrementUnreadCount());
    });
  }, [socketInstance]);

  return (
    <SocketContext.Provider value={socketInstance}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): Socket | null => {
  return useContext(SocketContext);
};

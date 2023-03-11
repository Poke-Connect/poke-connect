import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import io from "socket.io-client";
import { SERVER_URL } from "config/serverConfig";
import { useSelector, useDispatch } from "react-redux";
import { incrementUnreadCount } from "features/conversations/conversationsSlice";
import { createOnlineUsersArray } from "helpers/createOnlineUsersArray";
import { setOnlineUsers } from "features/onlineUsers/onlineUsersSlice";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    socketRef.current = io(SERVER_URL, { withCredentials: true });
    if (user) {
      socketRef.current.emit("add-user", user._id);
    }
    setSocket(socketRef.current);
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    // Get all connected users from server
    socket?.on("get-users", (data) => {
      const onlineUsers = createOnlineUsersArray(data);
      dispatch(setOnlineUsers(onlineUsers));
      console.log("Received users from server:", data);
    });

    socket?.on("connection-added", (_data) => {
      dispatch(incrementUnreadCount());
    });
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const Socket = () => {
  return useContext(SocketContext);
};

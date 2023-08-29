import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import conversationsReducer from "../features/conversations/conversationsSlice";
import onlineUsersReducer from "../features/onlineUsers/onlineUsersSlice";
import chatReducer from "../features/chat/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversations: conversationsReducer,
    onlineUsers: onlineUsersReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

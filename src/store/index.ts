import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import conversationsReducer from "../features/conversations/conversationsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversations: conversationsReducer,
  },
});

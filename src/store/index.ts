import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import conversationsReducer from "../features/conversations/conversationsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    conversations: conversationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

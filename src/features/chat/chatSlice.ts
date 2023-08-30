import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "helpers/helpersAuth";

const initialState = {
  chatId: null,
  chatUser: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeUserChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatUser = action.payload.chatUser;
      setLocalStorage("chatState", {
        chatUser: action.payload.chatUser,
        chatId: action.payload.chatId,
      });
    },
  },
});

export const { changeUserChat } = chatSlice.actions;

export default chatSlice.reducer;

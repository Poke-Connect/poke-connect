import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unreadCount: 0,
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    incrementUnreadCount: (state) => {
      state.unreadCount++;
    },
    resetCount: (state) => {
      state.unreadCount = 0;
    },
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload.newConnectionCount;
    },
  },
});

export const { incrementUnreadCount, resetCount, setUnreadCount } =
  conversationsSlice.actions;

export default conversationsSlice.reducer;

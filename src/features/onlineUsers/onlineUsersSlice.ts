import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnlineUsersState {
  currentOnlineUsers: string[];
}

const initialState: OnlineUsersState = {
  currentOnlineUsers: [],
};

export const onlineUsersSlice = createSlice({
  name: "onlineUsers",
  initialState,
  reducers: {
    setOnlineUsers: (state, action: PayloadAction<any[]>) => {
      state.currentOnlineUsers = action.payload;
    },
  },
});

export const { setOnlineUsers } = onlineUsersSlice.actions;

export default onlineUsersSlice.reducer;

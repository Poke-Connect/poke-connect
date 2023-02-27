import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const rideSlice = createSlice({
  name: "ride",
  initialState,
});

export default rideSlice.reducer;

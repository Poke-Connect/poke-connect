import { configureStore } from "@reduxjs/toolkit";
import rideReducer from "../reducers/ride/rideSlice";

export const store = configureStore({
  reducer: {
    ride: rideReducer,
  },
});

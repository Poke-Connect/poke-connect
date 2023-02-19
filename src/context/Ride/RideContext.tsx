import { createContext } from "react";

export interface RideContextInterface {
  ride: any | null;
}

export const rideContextDefaults: RideContextInterface = {
  ride: null,
};

export const RideContext =
  createContext<RideContextInterface>(rideContextDefaults);

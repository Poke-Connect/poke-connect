import { createContext } from "react";
import { User } from "firebase/auth";

export interface AuthContextInterface {
  user: any | null;
}

export const authContextDefaults: AuthContextInterface = {
  user: null,
};

export const AuthContext =
  createContext<AuthContextInterface>(authContextDefaults);

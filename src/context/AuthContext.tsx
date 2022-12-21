import { createContext } from "react";
import { User } from "firebase/auth";

export interface AuthContextInterface {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
}

export const authContextDefaults: AuthContextInterface = {
  googleSignIn: () => null,
  logOut: () => null,
  user: null,
};

export const AuthContext =
  createContext<AuthContextInterface>(authContextDefaults);

import { IUser } from "types";
import { RootState } from "store";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: IUser | null;
  error: string | null;
  loading: boolean;
}

interface Credentials {
  email: string;
  password: string;
}

interface TokenResponse {
  token: string;
  user: IUser;
}

interface RefreshTokenResponse {
  token: string;
  user: IUser;
}

export {
  AuthState,
  Credentials,
  TokenResponse,
  RefreshTokenResponse,
  IUser,
  RootState,
};

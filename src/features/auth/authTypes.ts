import { IUser } from "types";
import { RootState } from "store";

interface SignInResponse {
  token: string;
  user: any;
}

interface AuthState {
  isAuthenticated: boolean;
  token: any;
  user: any;
  error: any;
  loading: boolean;
}

export { AuthState, IUser, RootState, SignInResponse };

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signInUser } from "api/auth";
import { getUser } from "api/user";
import jwt_decode from "jwt-decode";
import {
  setCookie,
  getCookie,
  clearAuthData,
  setLocalStorage,
} from "helpers/helpersAuth";
import { AuthState, SignInResponse } from "./authTypes";
import { googleLogout } from "@react-oauth/google";

// CreateAsyncThunk takes 2 types --> <Type(Return object), Type(Argument)>

export const login = createAsyncThunk<SignInResponse, string>(
  "auth/login",
  async (credentials) => {
    try {
      const response = await signInUser(credentials);
      return response?.data;
    } catch (error) {
      throw new Error("Error signing in the user");
    }
  }
);

export const getUserData = createAsyncThunk<any, string>(
  "auth/getUserData",
  async (token) => {
    try {
      const decodedToken: any = jwt_decode(token);
      const userData = await getUser(decodedToken._id);
      return userData;
    } catch (error) {
      throw new Error("Error signing in the user");
    }
  }
);

// export const refreshAccessToken = createAsyncThunk<any, any>(
//   "auth/refreshAccessToken",
//   async (navigate) => {
//     try {
//       removeCookie("token");
//       const res = await generateRefreshToken();
//       return res?.data;
//     } catch (error) {
//       console.log("FACING ERROR FINISHED");
//       navigate("/signin");
//       throw new Error("Error signing in the user");
//     }
//   }
// );

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      googleLogout();
      clearAuthData();
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    //Login builder
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<SignInResponse>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        setCookie("token", action.payload.token);
        setLocalStorage("user", action.payload.user);
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.error.message;
    });

    //User data builder
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = getCookie("token");
      state.error = null;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.isAuthenticated = false;
    });
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;

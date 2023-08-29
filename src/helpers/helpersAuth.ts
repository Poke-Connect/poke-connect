import cookie from "js-cookie";
import { googleLogout } from "@react-oauth/google";

// set in cookie
export const setCookie = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1000,
    });
  }
};

// remove from cookie
export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    if (getCookie(key)) {
      cookie.remove(key, {
        expires: 1,
      });
    }
  }
};

// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key: string) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};

//get token
export const getToken = () => {
  if (getCookie("token")) {
    return getCookie("token");
  } else {
    return null;
  }
};

// set in localstorage
export const setLocalStorage = (
  key: string,
  value: string | number | boolean | object
) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// remove from localstorage
export const removeLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// get from localstorage
export const getLocalStorage = (key: any) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response: any, next: any) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// access user info from localstorage
export const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return localStorage.getItem("user");
      } else {
        return false;
      }
    }
  }
};

//Clear complete local storage
export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

//Clear Auth storage
export const clearAuthData = () => {
  clearLocalStorage();
  removeCookie("token");
  removeCookie("refreshToken");
};

export const getLocalUser = () => {
  const storedUserJSON = localStorage.getItem("user");
  const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : null;
  return storedUser;
};

export const getLocalChat = () => {
  const storedChatJSON = localStorage.getItem("chatState");
  const storedChat = storedChatJSON ? JSON.parse(storedChatJSON) : null;
  return storedChat;
};

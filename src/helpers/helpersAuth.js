import cookie from "js-cookie";
import { googleLogout } from "@react-oauth/google";

// set in cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1000,
    });
  }
};

// remove from cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    if (getCookie(key)) {
      cookie.remove(key, {
        expires: 1,
      });
    }
  }
};

// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key) => {
  if (window !== "undefined") {
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
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// remove from localstorage
export const getLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.getItem(key);
  }
};

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// access user info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
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

export const signout = () => {
  if (window !== "undefined") {
    if (getToken()) {
      removeCookie("token");
    }
    if (getLocalStorage("user")) {
      removeLocalStorage("user");
    }
    googleLogout();
  }
};

export const clearStorageData = () => {
  if (window !== "undefined") {
    if (getToken()) {
      removeCookie("token");
    }
    if (getLocalStorage("user")) {
      removeLocalStorage("user");
    }
  }
};

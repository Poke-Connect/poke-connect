import axios from "axios";
import { getToken } from "helpers/helpersAuth";

const BASE_URL = "http://localhost:5900/";

// Make a request for a user with a given ID

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
  Authorization: `Bearer ${getToken()}`,
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

export const getRequest = async (url, params = {}) => {
  try {
    const res = await instance.get(url, {
      params,
      headers: headerConfig,
    });
    return res;
  } catch (e) {
    console.log("Get Request failed: ", e);
  }
};

export const postRequest = async (url, data) => {
  try {
    const res = await instance.post(url, data, {
      headers: headerConfig,
    });
    console.log("Data added successfully", res);

    return res;
  } catch (e) {
    console.log("Data addition failed: ", e);
  }
};

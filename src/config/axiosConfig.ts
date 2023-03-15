import axios from "axios";
import { getToken } from "helpers/helpersAuth";
import { SERVER_URL } from "./serverConfig";

const instance = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true,
});

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
};

export const getRequest = async (url: any, params: any = {}) => {
  try {
    const res = await instance.get(url, {
      params,
      headers: { ...headerConfig, Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (e) {
    console.log("Get Request failed: ", e);
  }
};

export const postRequest = async (url: any, data?: any) => {
  try {
    const res = await instance.post(url, data, {
      headers: { ...headerConfig, Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (e) {
    console.log("Data addition failed: ", e);
  }
};

export const putRequest = async (url: any, data: any) => {
  try {
    const res = await instance.put(url, data, {
      headers: { ...headerConfig, Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (e) {
    console.log("Data update failed: ", e);
  }
};

export const patchRequest = async (url: any, data?: any) => {
  try {
    const res = await instance.patch(url, data, {
      headers: { ...headerConfig, Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (e) {
    console.log("Data update failed: ", e);
  }
};

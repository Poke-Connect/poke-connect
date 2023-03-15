import { ENV } from "config/envConfig";

const serverUrl = {
  DEV: "http://localhost:5900",
  PROD: "https://poke-connect-backend.onrender.com",
};

export const SERVER_URL = ENV ? serverUrl[ENV] : serverUrl.PROD;

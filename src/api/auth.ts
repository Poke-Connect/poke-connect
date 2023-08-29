import { postRequest } from "config/axiosConfig";

const BASE_URL = `/auth`;

export const signInUser = async (credentials: any) => {
  return await postRequest(`${BASE_URL}/google-login`, {
    idToken: credentials,
  });
};

// export const generateRefreshToken = async () => {
//   return await postRequest(`${BASE_URL}/refresh-token`);
// };

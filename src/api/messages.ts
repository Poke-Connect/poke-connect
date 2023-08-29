import { getRequest, postRequest } from "config/axiosConfig";

const messageBase = "/message";

export const getConnectionMessages = async (connectionId: string | null) => {
  if (!connectionId) {
    return [];
  }
  const url = `${messageBase}/${connectionId}`;
  const res = await getRequest(url);
  return res?.data;
};

export const addMessage = async (data: any) => {
  const url = `${messageBase}`;
  const res = await postRequest(url, data);
  return res?.data;
};

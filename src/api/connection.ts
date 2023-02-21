import { getRequest, patchRequest, postRequest } from "config/axiosConfig";

const connectionBase = "/connection";

export const postConnection = async (connectionData: any) => {
  const url = `${connectionBase}`;
  const res = await postRequest(url, connectionData);
  return res?.data;
};

export const getUserConnections = async (userId: string) => {
  const url = `${connectionBase}`;
  const res = await getRequest(url, { userId });
  if (res?.status === 200) {
    return res?.data;
  } else {
    console.log("response error", res);
    return null;
  }
};

export const getConnection = async (connectionData: any) => {
  const url = `${connectionBase}`;
  const res = await postRequest(url, connectionData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};

export const updateConnection = async (
  connectionId: string,
  lastMessageData: any,
  updatedAt: any
) => {
  const url = `${connectionBase}/${connectionId}`;
  const res = await patchRequest(url, {
    lastMessage: lastMessageData,
    updatedAt: updatedAt,
  });
  return res?.data;
};

import { getRequest, postRequest } from "../axiosConfig";

const connectionBase = "/connection";

export const postConnection = async (connectionData: any) => {
  const url = `${connectionBase}`;
  const res = await postRequest(url, connectionData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};

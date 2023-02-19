import { getRequest, putRequest } from "../axiosConfig";

const userBase = "/user";

export const getUser = async (id: string) => {
  const url = `${userBase}/${id}`;
  const res = await getRequest(url);
  if (res?.status === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const updateUser = async (id: string, newData: any) => {
  const url = `${userBase}/${id}`;
  const res = await putRequest(url, newData);
  return res?.data;
};

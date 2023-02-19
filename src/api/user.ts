import { getRequest } from "../axiosConfig";

const userBase = "/user";

export const getUser = async (id: string) => {
  const url = `${userBase}/${id}`;
  return getRequest(url);
};

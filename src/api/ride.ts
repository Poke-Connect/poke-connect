import { getRequest, patchRequest, postRequest } from "config/axiosConfig";

const rideBase = "/ride";
const rideConnectionBase = "/rideConnection";

export const createRide = async (rideData) => {
  const res = await postRequest(rideBase, rideData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};

export const getRide = async (id: string) => {
  const url = `${rideBase}/${id}`;
  const res = await getRequest(url);
  if (res?.status === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getFilteredRides = async (
  rideId: string,
  userId: string,
  date: string,
  rideType: string
) => {
  const url = `${rideBase}/filter`;

  const res = await getRequest(url, {
    ride: rideId,
    user: userId,
    date,
    rideType,
  });

  if (res?.status === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const getConnectedRideConnections = async (id: string) => {
  const url = `${rideConnectionBase}/${id}`;
  const res = await getRequest(url);
  if (res?.status === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const postRideConnection = async (id: string, connectionData) => {
  const url = `${rideConnectionBase}/${id}`;
  const res = await postRequest(url, connectionData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};

export const getUserRides = async (userId: string) => {
  const url = `${rideBase}/user`;
  const res = await getRequest(url, {
    user: userId,
  });
  if (res?.status === 200) {
    return res?.data;
  } else {
    return {};
  }
};

export const toggleRideDiscoverability = async (
  rideId: string,
  discoverability: boolean
) => {
  const url = `${rideBase}/${rideId}/discoverability`;
  const res = await patchRequest(url, { discoverability });
  console.log("updated ride", res?.data);

  return res?.data;
};

import { postConnection } from "api/connection";
import { createRide, postRideConnection } from "api/ride";
import { createDateString, createTimeStamp } from "helpers/dateHelper";
import { createNewConnectionData, createRideConnectionData } from "./helpers";

export const createNewRideBackend = async (
  rideType,
  userId,
  dateValue,
  timeValue,
  locationValue,
  distance
) => {
  const date = createDateString(dateValue);
  const timeStampRide = createTimeStamp(dateValue, timeValue);

  const newRideData = {
    user: userId,
    date,
    discoverability: true,
    location: locationValue,
    rideType,
    time: timeValue,
    timeStampRide,
    distance,
  };

  return createRide(newRideData);
};

export const createRideConnection = async (
  user1,
  user2,
  ride1,
  ride2,
  extraDist,
  extraTime
) => {
  const connectionData1 = createRideConnectionData(user1, ride1, {
    extraDist,
    extraTime,
  });

  const connectionData2 = createRideConnectionData(user2, ride2, {
    extraDist,
    extraTime,
  });

  await postRideConnection(ride1._id, connectionData2);
  await postRideConnection(ride2._id, connectionData1);

  return;
};

export const createNewConnection = async (user1, user2) => {
  const connectionData = createNewConnectionData(user1._id, user2._id);
  const { connectionId = null } = await postConnection(connectionData);

  return connectionId;
};

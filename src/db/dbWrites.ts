import { IFeedback } from "./../types/IFeedback";
import { postConnection } from "api/connection";
import { addFeedback } from "api/feedback";
import { addMessage } from "api/messages";
import { createRide, postRideConnection } from "api/ride";
import { createDateString, createTimeStamp } from "helpers/dateHelper";
import { createNewConnectionData, createRideConnectionData } from "./helpers";

export const createNewRideBackend = async (
  rideType: string,
  userId: string,
  dateValue: any,
  timeValue: any,
  locationValue: string,
  distance: number,
  from: string
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
    from,
  };

  return createRide(newRideData);
};

export const createRideConnection = async (
  user1: any,
  user2: any,
  ride1: any,
  ride2: any,
  extraDist: any,
  extraTime: any,
  connectionId: any
) => {
  const connectionData1 = createRideConnectionData(
    user1,
    ride1,
    {
      extraDist,
      extraTime,
    },
    connectionId
  );

  const connectionData2 = createRideConnectionData(
    user2,
    ride2,
    {
      extraDist,
      extraTime,
    },
    connectionId
  );

  await postRideConnection(ride1._id, connectionData2);
  await postRideConnection(ride2._id, connectionData1);

  return;
};

export const createNewConnection = async (user1: any, user2: any) => {
  const connectionData = createNewConnectionData(user1._id, user2._id);
  const { connectionId = null } = await postConnection(connectionData);

  return connectionId;
};

export const createNewMessage = async (messageData: any) => {
  const message = await addMessage(messageData);
  return message._id;
};

export const addFeedbackDb = async (feedback: IFeedback) => {
  const res = await addFeedback(feedback);
  return res;
};

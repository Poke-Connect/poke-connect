import * as dayjs from "dayjs";

const INPUT_FORMAT = "YYYY-MM-DDTHH:mm";
const INPUT_DATE_FORMAT = "YYYY-MM-DD";
const INPUT_TIME_FORMAT = "HH:mm";
const DISPLAY_TIME_FORMAT = "hh:mm A";

export const getTodaysDate = () => {
  const dateToday = dayjs().format(INPUT_DATE_FORMAT);
  return dateToday;
};

export const getTimeNow = () => {
  const timeNow = dayjs().format(INPUT_TIME_FORMAT);
  return timeNow;
};

export const getCurrentTimeStamp = () => {
  const timeStamp = dayjs().unix(); //timeStamp in seconds
  return timeStamp;
};

export const createDateString = (dateStr) => {
  const travelDate = dayjs(dateStr).format(INPUT_DATE_FORMAT);
  return travelDate;
};

export const createTimeStamp = (dateStr, timeStr) => {
  const dateTimeString = `${dateStr}T${timeStr}`;
  const dateTimeStamp = dayjs(dateTimeString).unix(); //dateTimeStamp is in seconds
  return dateTimeStamp;
};

export const createTimeString = (timeStr) => {
  const travelTime = dayjs(timeStr).format(INPUT_TIME_FORMAT);
  return travelTime;
};

export const createTimeStringFromTimeStamp = (timeStamp) => {
  const timeObj = dayjs.unix(timeStamp);
  const timeStr = dayjs(timeObj).format(DISPLAY_TIME_FORMAT);
  return timeStr;
};

export const getTimeInMins = (duration) => {
  const mins = Math.floor(duration / 60);
  return mins;
};

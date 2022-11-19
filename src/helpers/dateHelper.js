import * as dayjs from "dayjs";

const INPUT_FORMAT = "YYYY-MM-DDTHH:mm";
const INPUT_DATE_FORMAT = "YYYY-MM-DD";
const INPUT_TIME_FORMAT = "HH:mm";

export const getTodaysDate = () => {
  const dateToday = dayjs().format(INPUT_DATE_FORMAT);
  return dateToday;
};

export const getTimeNow = () => {
  const timeNow = dayjs().format(INPUT_TIME_FORMAT);
  return timeNow;
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

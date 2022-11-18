import * as dayjs from "dayjs";

const INPUT_FORMAT = "YYYY-MM-DDTHH:mm";
const INPUT_DATE_FORMAT = "YYYY-MM-DD";

export const getTodaysDate = () => {
  const dateToday = dayjs().format(INPUT_FORMAT);
  return dateToday;
};

export const createDateString = (dateStr) => {
  const travelDate = dayjs(dateStr).format(INPUT_DATE_FORMAT);
  return travelDate;
};

export const createTimeStamp = (dateStr) => {
  const dateTimeStamp = dayjs(dateStr).unix(); //dateTimeStamp is in seconds
  return dateTimeStamp;
};


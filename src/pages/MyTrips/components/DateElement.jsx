import React from "react";
import {
  createTimeStringFromTimeStamp,
  createDateStringTrip,
} from "helpers/dateHelper";

const DateElement = (props) => {
  const { date, timeStampRide } = props;
  const dateDisplay = createDateStringTrip(date);
  const timeDisplay = createTimeStringFromTimeStamp(timeStampRide);
  return (
    <div className="flex items-center justify-start">
      <p className="text-typeText">{`${dateDisplay}, ${timeDisplay}`}</p>
    </div>
  );
};

export default DateElement;

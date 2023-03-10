import React, { FC } from "react";
import {
  createTimeStringFromTimeStamp,
  createDateStringTrip,
} from "helpers/dateHelper";
import { DateTimeText } from "components";

interface IProps {
  date: any;
  timeStampRide: any;
}

const DateTimeElement: FC<IProps> = (props) => {
  const { date, timeStampRide } = props;
  const dateDisplay = createDateStringTrip(date);
  const timeDisplay = createTimeStringFromTimeStamp(timeStampRide);
  return (
    <div className="flex items-center justify-start">
      <DateTimeText text={`${dateDisplay}, ${timeDisplay}`} />
    </div>
  );
};

export default DateTimeElement;

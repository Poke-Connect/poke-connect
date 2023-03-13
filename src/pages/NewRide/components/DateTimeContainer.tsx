import { getTimeNow, getTodaysDate } from "helpers/dateHelper";
import React, { FC } from "react";

interface IProps {
  dateValue: any;
  setDateValue: Function;
  timeValue: any;
  setTimeValue: Function;
}

const DateTimeContainer: FC<IProps> = (props) => {
  const { dateValue, setDateValue, timeValue, setTimeValue } = props;

  const onDateChangeHandler = (event: any) => {
    setDateValue(event.target.value);
  };

  const onTimeChangeHandler = (event: any) => {
    setTimeValue(event.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-between my-2 w-full">
      <div className="flex w-1/2">
        <input
          id="rideDate"
          type="date"
          name="ridedate"
          value={dateValue}
          onChange={onDateChangeHandler}
          min={getTodaysDate()}
          className="bg-lightGray p-2 text-lg rounded-lg h-12 mr-1 flex-1"
        />
      </div>
      <div className="flex w-1/2 ">
        <input
          id="rideTime"
          type="time"
          name="ridetime"
          value={timeValue}
          onChange={onTimeChangeHandler}
          min={getTimeNow()}
          className="bg-lightGray p-2 text-lg rounded-lg h-12  ml-1 flex-1"
        />
      </div>
    </div>
  );
};

export default DateTimeContainer;

import React from "react";
import { getTodaysDate, getTimeNow } from "../../../helpers/dateHelper";

const DateTimeContainer = (props) => {
  const { dateValue, setDateValue, timeValue, setTimeValue } = props;

  const onDateChangeHandler = (e) => {
    setDateValue(e.target.value);
  };

  const onTimeChangeHandler = (e) => {
    setTimeValue(e.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-center mt-2 w-5/6">
      <input
        id="rideDate"
        type="date"
        name="ridedate"
        value={dateValue}
        onChange={onDateChangeHandler}
        min={getTodaysDate()}
        className="bg-lightGray p-2 text-lg mr-2 w-1/2 rounded-lg"
      />
      <input
        id="rideTime"
        type="time"
        name="ridetime"
        value={timeValue}
        onChange={onTimeChangeHandler}
        min={getTimeNow()}
        className="bg-lightGray p-2 text-lg ml-2 w-1/2 rounded-lg"
      />
    </div>
  );
};

export default DateTimeContainer;

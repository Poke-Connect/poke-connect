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
    <div className="flex flex-row items-center  mt-2 w-5/6  justify-between">
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

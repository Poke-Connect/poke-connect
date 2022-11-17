import React from "react";
import { getTodaysDate } from "../../../helpers/dateHelper";

const DateTimeContainer = (props) => {
  const { dateValue, setDateValue } = props;

  const onDateChangeHandler = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="ride">Enter a date and time of your ride: </label>
      <input
        id="ride"
        type="datetime-local"
        name="ridedate"
        value={dateValue}
        onChange={onDateChangeHandler}
        min={getTodaysDate()}
      />
    </div>
  );
};

export default DateTimeContainer;

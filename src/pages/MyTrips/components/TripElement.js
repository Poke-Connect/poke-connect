import React from "react";
import ToggleElement from "../../../components/ToggleElement";

const TripElement = (props) => {
  const handleToggleChange = () => {};
  return (
    <div>
      <h3>{props.date}</h3>
      <h3>{props.tripName}</h3>
      {props.upcoming ? (
        <ToggleElement
          toggleState={true}
          handleToggleChange={handleToggleChange}
        />
      ) : null}
    </div>
  );
};

export default TripElement;

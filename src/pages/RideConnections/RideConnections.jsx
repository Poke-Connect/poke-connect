import React from "react";
import { useNavigate } from "react-router-dom";

const RideConnections = (props) => {
  const { rideId } = props;
  const navigate = useNavigate();
  const onAvailablePressHandler = () => {
    navigate(`/connections/${rideId}/available`);
  };
  const onConnectedPressHandler = () => {
    navigate(`/connections/${rideId}`);
  };
  return (
    <div>
      {props.children}
      <div className=" flex-row bg-blue-400 mt-10">
        <button className="mr-10" onClick={onAvailablePressHandler}>
          Available
        </button>
        <button onClick={onConnectedPressHandler}>Connected</button>
      </div>
    </div>
  );
};

export default RideConnections;

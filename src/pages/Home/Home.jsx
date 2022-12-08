import React from "react";
import NewConnectionContainer from "./components/NewConnectionContainer";
import { useNavigate } from "react-router-dom";
import Arrow from "assets/icons/Arrow";
import Line from "components/Line";
import RoundButton from "components/Buttons/RoundButton";

const DESTINATION_RIDE = "DESTINATION_RIDE";
const ORIGIN_RIDE = "ORIGIN_RIDE";

const Home = () => {
  const navigate = useNavigate();

  const onClickTripsHandler = () => {
    navigate(`/mytrips`);
  };

  const onTravelToAirportHandler = () => {
    navigate(`/connections/new`, { state: { rideType: DESTINATION_RIDE } });
  };

  const onTravelFromAirportHandler = () => {
    navigate(`/connections/new`, { state: { rideType: ORIGIN_RIDE } });
  };

  return (
    <div className="flex flex-col items-center w-full pt-5">
      <NewConnectionContainer
        onTravelToAirportHandler={onTravelToAirportHandler}
        onTravelFromAirportHandler={onTravelFromAirportHandler}
      />
      <Line />
      <div className="flex flex-col w-4/5">
        <RoundButton
          text={"My Trips"}
          onClickHandler={onClickTripsHandler}
          IconParam={Arrow}
        />
      </div>
    </div>
  );
};

export default Home;

import React, { FC } from "react";
import NewConnectionContainer from "./components/NewConnectionContainer";
import { useNavigate } from "react-router-dom";
import Arrow from "assets/icons/Arrow";
import WarningBar from "./components/WarningBar";
import { COMMON_STRINGS } from "appConstants";
import { Line, SecondaryButton } from "components";

const Home: FC = () => {
  const navigate = useNavigate();
  const { DESTINATION_RIDE, ORIGIN_RIDE } = COMMON_STRINGS;

  const onClickTripsHandler = () => {
    navigate(`/mytrips`);
  };

  const onTravelToHandler = () => {
    navigate(`/connections/new`, {
      state: { rideType: DESTINATION_RIDE },
    });
  };

  const onTravelFromHandler = () => {
    navigate(`/connections/new`, {
      state: { rideType: ORIGIN_RIDE },
    });
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <WarningBar />
      <NewConnectionContainer
        onTravelToHandler={onTravelToHandler}
        onTravelFromHandler={onTravelFromHandler}
      />
      <Line />
      <div className="flex flex-col w-4/5">
        <SecondaryButton
          text={"My Trips"}
          onClickHandler={onClickTripsHandler}
          IconParam={Arrow}
        />
      </div>
    </div>
  );
};

export default Home;

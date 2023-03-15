import React, { FC } from "react";
import NewConnectionContainer from "./components/NewConnectionContainer";
import { useNavigate } from "react-router-dom";
import WarningBar from "./components/WarningBar";
import { COMMON_STRINGS } from "appConstants";

const Home: FC = () => {
  const navigate = useNavigate();
  const { DESTINATION_RIDE, ORIGIN_RIDE } = COMMON_STRINGS;

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
    <div className="flex flex-col items-center w-full">
      <WarningBar />
      <NewConnectionContainer
        onTravelToHandler={onTravelToHandler}
        onTravelFromHandler={onTravelFromHandler}
      />
    </div>
  );
};

export default Home;

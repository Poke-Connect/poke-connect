import React from "react";
import HomeButton from "./components/HomeButton";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow";

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
      <div className="bg-white flex flex-col items-center justify-center h-full">
        <div className="bg-lightGray p-6 flex flex-col rounded-2xl w-4/5">
          <h2 className="text-2xl mb-6 text-left">Find new connections</h2>
          <div className="flex flex-col">
            <HomeButton
              onClick={onTravelFromAirportHandler}
              name={"From Airport"}
            />

            <HomeButton
              onClick={onTravelToAirportHandler}
              name={"To Airport"}
            />
          </div>
        </div>
        <span className="h-0.5 bg-lightGreen mt-20 mb-20 w-4/5"></span>
        <div className="flex flex-col w-4/5">
          <HomeButton onClick={onClickTripsHandler} name={"My Trips"}>
            <div>
              <Arrow />
            </div>
          </HomeButton>
        </div>
      </div>
  );
};

export default Home;

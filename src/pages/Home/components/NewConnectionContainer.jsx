import React from "react";
import HomeButton from "./HomeButton";
import PlaneLanding from "assets/icons/PlaneLanding.svg";
import PlaneTakeoff from "assets/icons/PlaneTakeoff.svg";

const NewConnectionContainer = (props) => {
  const { onTravelFromAirportHandler, onTravelToAirportHandler } = props;
  return (
    <div className="bg-lightGray p-6 flex flex-col rounded-2xl w-4/5">
      <h2 className="text-2xl mb-6 text-left">Find new connections</h2>
      <div className="flex flex-col">
        <HomeButton onClick={onTravelFromAirportHandler} name={"From Airport"}>
          <img src={PlaneLanding} alt="PL" />
        </HomeButton>

        <HomeButton onClick={onTravelToAirportHandler} name={"To Airport"}>
          <img src={PlaneTakeoff} alt="PT" />
        </HomeButton>
      </div>
    </div>
  );
};

export default NewConnectionContainer;

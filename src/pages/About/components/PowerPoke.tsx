import React, { FC } from "react";
import Heart from "assets/icons/heart";
import { ABOUT_STRINGS } from "appConstants";

const PowerPoke: FC = () => {
  const { POWER_POKE_DATA } = ABOUT_STRINGS;
  return (
    <div className="donate-to-poke text-left bg-primary-light rounded-lg p-5 mt-6">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5">
        <Heart />
        Power Poke
      </h2>
      <div className="flex gap-2 flex-col px-3">
        <p className="font-normal text-sm ">{POWER_POKE_DATA.line1}</p>
        <p className="font-normal text-sm ">{POWER_POKE_DATA.line2}</p>
        <p className="font-medium text-sm ">{POWER_POKE_DATA.line3}</p>
      </div>
    </div>
  );
};

export default PowerPoke;

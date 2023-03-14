import React, { FC } from "react";
import { ABOUT_STRINGS } from "appConstants";

const HowWeWork: FC = () => {
  const { HOW_IT_WORKS_DATA } = ABOUT_STRINGS;
  return (
    <div id="container" className="mt-4 py-2">
      <h2 className="font-semibold text-left text-xl">How Poke works?</h2>
      <div className="pt-2 text-sm font-normal">
        <div>
          <p className="font-semibold text-base">1. Create a ride</p>
          <p className="pl-5">{HOW_IT_WORKS_DATA.CREATE_RIDE}</p>
        </div>

        <div className="mt-3">
          <p className="font-semibold text-base">2. Find matches</p>
          <p className="pl-5">{HOW_IT_WORKS_DATA.FIND_MATCHES}</p>
        </div>

        <div className="my-3">
          <p className="font-semibold text-base text-primary">3. Poke</p>
          <p className="pl-5">{HOW_IT_WORKS_DATA.POKE}</p>
        </div>
        <p>{HOW_IT_WORKS_DATA.ADDITIONAL_SUPPORT}</p>
      </div>
    </div>
  );
};

export default HowWeWork;

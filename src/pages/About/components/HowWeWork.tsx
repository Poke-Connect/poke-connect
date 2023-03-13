import React, { FC } from "react";
import { ABOUT_STRINGS } from "appConstants";

const HowWeWork: FC = () => {
  const { HOW_IT_WORKS_DATA } = ABOUT_STRINGS;
  return (
    <div id="container" className="mt-4 py-2">
      <h2 className="font-semibold text-left text-xl">How it works?</h2>
      <div className="pt-2 text-sm font-normal">
        <p>{HOW_IT_WORKS_DATA.line1}</p>
        <p className="pt-2 font-semibold text-primary">
          {HOW_IT_WORKS_DATA.line2}
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;

import React, { FC } from "react";
import { ABOUT_STRINGS } from "appConstants";

const AboutUs: FC = () => {
  const { ABOUT_US_DATA, QUOTE } = ABOUT_STRINGS;
  return (
    <div className="about-us text-left pt-4">
      <h2 className="font-semibold text-left text-xl">About Us</h2>
      <p className="font-normal text-sm pt-2">{ABOUT_US_DATA}</p>

      <div>
        <p className="font-semibold text-sm pt-2 text-primary">{QUOTE}</p>
        <p className=" font-semibold text-sm text-right pr-3">{"- Poke"}</p>
      </div>
    </div>
  );
};

export default AboutUs;

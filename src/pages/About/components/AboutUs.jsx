import Heading from "components/UI/Heading";
import React from "react";

const ABOUT_US_DATA =
  "Poke is not an option; it is a lifestyle choice for those with sustainable minds. Choose your co-passengers and make them a part of your social circle. Experience the best way to travel at a minimised environmental and financial cost.";
const AboutUs = () => {
  return (
    <div className="about-us text-left ">
      <Heading text={"About Us"} />
      <p className="font-normal text-base pt-2">{ABOUT_US_DATA}</p>
    </div>
  );
};

export default AboutUs;

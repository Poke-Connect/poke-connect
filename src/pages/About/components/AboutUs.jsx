import React from "react";

const ABOUT_US_DATA =
  "Poke helps you connect with probable co-passengers and share a cab. Poke is not an option; it is a lifestyle choice for those with sustainable minds. Experience the best way to travel at a minimised environmental and financial cost.";
const AboutUs = () => {
  return (
    <div className="about-us text-left pt-4">
      <h2 className="font-semibold text-left text-xl">About Us</h2>
      <p className="font-normal text-sm pt-2">{ABOUT_US_DATA}</p>
    </div>
  );
};

export default AboutUs;

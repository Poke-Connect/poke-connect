import Heading from "components/UI/Heading";
import React from "react";

const ABOUT_US_DATA =
  "Chupa chups donut donut danish marshmallow brownie lemon drops. Tootsie roll wafer candy canes candy canes gingerbread chocolate cake. Bonbon donut brownie cheesecake fruitcake jelly chocolate jelly halvah. Sweet jelly-o halvah carrot cake apple pie carrot cake ice cream topping.";

const AboutUs = () => {
  return (
    <div className="about-us text-left ">
      <Heading text={"About Us"} />
      <p className="font-normal text-sm">{ABOUT_US_DATA}</p>
    </div>
  );
};

export default AboutUs;

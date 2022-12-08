import React from "react";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import ReachUs from "./components/ReachUs";

const About = () => {
  return (
    <div className="pl-6 pr-7">
      <AboutUs />
      <Donate />
      <div className="mt-10 pb-10">
        <ReachUs />
      </div>
    </div>
  );
};

export default About;

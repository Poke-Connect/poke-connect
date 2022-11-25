import React from "react";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import ReachUs from "./components/ReachUs";

const About = () => {
  return (
    <div className="pt-6 px-10">
      <AboutUs />
      <Donate />
      <ReachUs />
    </div>
  );
};

export default About;

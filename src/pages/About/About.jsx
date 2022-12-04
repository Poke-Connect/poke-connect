import React from "react";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import ReachUs from "./components/ReachUs";

const About = () => {
  return (
    <div className="p-7 pt-3 pb-2 px-10">
      <AboutUs />
      <Donate />
      <div className="m-2"><ReachUs /></div>
    </div>
  );
};

export default About;

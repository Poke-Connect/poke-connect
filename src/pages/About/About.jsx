import React from "react";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import ReachUs from "./components/ReachUs";
import AboutHeader from "./components/AboutHeader";

const About = () => {
  return (
    <div className="flex flex-col fixed w-screen h-full overflow-y-scroll ">
      <div className=" flex h-[10%] ">
        <AboutHeader />
      </div>
      <div className="h-[90%] ">
        <div className="pl-6 pr-7">
          <AboutUs />
          <Donate />
          <div className="mt-10 pb-10">
            <ReachUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

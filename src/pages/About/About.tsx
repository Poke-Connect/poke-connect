import React, { FC } from "react";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import ReachUs from "./components/ReachUs";
import AboutHeader from "./components/AboutHeader";
import { useNavigate } from "react-router-dom";
import LinkText from "components/UI/LinkText";
import HowWeWork from "./components/HowWeWork";
import { useSelector } from "react-redux";

const About: FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store: any) => store.auth);
  const isLoggedIn = !!user;

  const onGetStartedHandler = () => {
    navigate(`/signin`);
  };

  return (
    <div className="flex flex-col fixed w-screen h-full overflow-y-scroll ">
      <div className=" flex h-[10%] ">
        <AboutHeader isLoggedIn={isLoggedIn} />
      </div>
      <div className="h-[90%] ">
        <div className="pl-6 pr-7">
          <AboutUs />
          {!isLoggedIn && (
            <LinkText
              text={"Get started"}
              onClickHandler={onGetStartedHandler}
            />
          )}
          <HowWeWork />
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

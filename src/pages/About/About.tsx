import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AboutHeader,
  AboutUs,
  HowWeWork,
  PowerPoke,
  ReachUs,
} from "./components";
import { LinkText } from "components";

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
          <PowerPoke />
          <div className="mt-10 pb-20">
            <ReachUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

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
import { CopyRightFooter, PrimaryButton } from "components";

const About: FC = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store: any) => store.auth);
  const isLoggedIn = !!user;

  const onGetStartedHandler = () => {
    navigate(`/signin`);
  };

  return (
    <div className="flex flex-col fixed w-screen h-full">
      <div className="flex h-[10%]">
        <AboutHeader isLoggedIn={isLoggedIn} />
      </div>
      <div className="overflow-y-scroll">
        <div className="pl-6 pr-7">
          <AboutUs />
          <HowWeWork />
          {!isLoggedIn && (
            <div className={"pt-2 pb-3"}>
              <PrimaryButton
                text={"Get started"}
                onClickHandler={onGetStartedHandler}
                styles="w-full"
              />
            </div>
          )}
          <PowerPoke />
          <div className="mt-10 pb-20">
            <ReachUs />
          </div>
        </div>
        <CopyRightFooter />
      </div>
    </div>
  );
};

export default About;

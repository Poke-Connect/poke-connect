import React, { FC } from "react";
import { ABOUT_MIN_STRINGS } from "appConstants";
import { LinkText } from "components";

interface IProps {
  aboutLinkHandler: () => void;
}

const AppInfo: FC<IProps> = ({ aboutLinkHandler }) => {
  return (
    <div className="px-10">
      <div className="about-us text-left pt-7">
        <h2 className="font-semibold text-xl pb-1.5">About Us</h2>
        <p className="font-normal text-sm pb-2">{ABOUT_MIN_STRINGS.ABOUT_US_DATA}</p>
        <LinkText
          text={"Learn more about Poke and how it works"}
          onClickHandler={aboutLinkHandler}
        />
      </div>
      <div className="power-us text-left pt-7">
        <h2 className="font-semibold text-xl pb-1.5">Power Poke</h2>
        <p className="font-normal text-sm pb-2">
          {ABOUT_MIN_STRINGS.POWER_POKE_DATA}
        </p>
        <LinkText text={"Reach out to us"} onClickHandler={aboutLinkHandler} />
      </div>
    </div>
  );
};

export default AppInfo;

import React from "react";
import Heart from "assets/icons/heart";
import DonateButton from "./DonateButton";

const DONATE_TEXT =
  " Poke is powered by people like you. Your donations help grow our team and build a better experience for you. Be a part of our pledge to reduce 600 tons of CO2 emissions in 2023.";

const Donate = () => {
  return (
    <div className="donate-to-poke text-left bg-primary rounded-lg p-5 mt-10">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5">
        <Heart />
        Donate to Poke
      </h2>
      <div className="flex gap-2 flex-col px-3">
        <p className="font-normal text-base ">{DONATE_TEXT}</p>
        <DonateButton />
      </div>
    </div>
  );
};

export default Donate;

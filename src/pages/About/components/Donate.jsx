import React from "react";
import Heart from "assets/icons/heart";

const DONATE_TEXT =
  " Poke is powered by people like you. Your donations help grow our team and build a better experience for you. Be a part of our pledge to reduce 600 tons of CO2 emissions in 2023.";

const Donate = () => {
  return (
    <div className="donate-to-poke text-left bg-primary rounded-lg p-5 mt-10">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5">
        <Heart />
        Donate to Poke
      </h2>
      <div className="flex gap-2">
        <p className="font-normal text-sm px-3">{DONATE_TEXT}</p>
        <div className="py-6 md:py-0">
          <button
            className="px-4 py-1 text-base font-semibold 
          bg-black text-white border-r-2 border-b-2 border-white"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;

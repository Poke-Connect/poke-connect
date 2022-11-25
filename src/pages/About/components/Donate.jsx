import React from "react";
import Heart from "../../../assets/icons/heart";

const DONATE_TEXT =
  "Poke is powered by people like you. Your donations help grow our team and build a better experience for you.";

const Donate = () => {
  return (
    <div className="donate-to-poke text-left pt-6">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5">
        <Heart />
        Donate to Poke
      </h2>
      <div className="flex gap-2">
        <p className="font-normal text-sm">{DONATE_TEXT}</p>
        <div>
          <button className="px-6 bg-lightGreen py-1 rounded-lg text-base font-semibold">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;

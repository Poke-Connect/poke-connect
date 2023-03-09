import React from "react";
import Heart from "assets/icons/heart";

const DONATE_TEXT =
  "Poke is powered by people like you. Please give us your valuable feedback to help us build a better experience for you.";

const NEW_DONATE_TEXT =
  "Also, the chances of you getting a match are directly proportional to the number of friends you get to sign up ;)";

const PowerPoke = () => {
  return (
    <div className="donate-to-poke text-left bg-primary rounded-lg p-5 mt-6">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5">
        <Heart />
        Power Poke
      </h2>
      <div className="flex gap-2 flex-col px-3">
        <p className="font-normal text-sm ">{DONATE_TEXT}</p>
        <p className="font-normal text-sm ">{NEW_DONATE_TEXT}</p>
      </div>
    </div>
  );
};

export default PowerPoke;

import React from "react";

const HOW_IT_WORKS = {
  line1:
    "Now that you have made up your mind, sign in with your email address to get started and create a trip. You will be redirected to the available connections tab. If you do not see any available connections at that point, you can always come back and check later Once you find a match, you can tap to chat and fix your plan (Your chats are only open 24 hours from your scheduled ride time).",
  line2: "Get. Set. Poke!",
};

const HowWeWork = () => {
  return (
    <div id="container" className="mt-4  py-2">
      <h2 className="font-semibold text-left text-xl">How it works?</h2>
      <div className="pt-2 text-sm font-normal">
        <p>{HOW_IT_WORKS.line1}</p>
        <p className="pt-2 font-semibold text-primary">{HOW_IT_WORKS.line2}</p>
      </div>
    </div>
  );
};

export default HowWeWork;

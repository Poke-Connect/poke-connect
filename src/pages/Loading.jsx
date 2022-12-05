import LoadingIcon from "assets/icons/LoadingIcon";
import React from "react";

const Loading = () => {
  return (
    <div
      role="status"
      className="flex text-typeText items-center justify-center text-sm h-screen pb-[80%] "
    >
      P
      <LoadingIcon />
      KE
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;

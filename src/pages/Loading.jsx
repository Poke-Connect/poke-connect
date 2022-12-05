import LoadingIcon from "assets/icons/LoadingIcon";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        role="status"
        className="flex text-typeText items-center justify-center h-screen text-sm"
      >
        P
        <LoadingIcon />
        KE
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

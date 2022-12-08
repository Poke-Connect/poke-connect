import React from "react";
import FromPoint from "assets/icons/FromPoint";
import ToPoint from "assets/icons/ToPoint";

const RideLine = (props) => {
  const { height } = props;
  const heightClass = {
    s: " h-[1px]",
    m: " h-[50px]",
  };
  return (
    <div className="flex flex-col justify-center w-fit items-center">
      <div>
        <FromPoint />
      </div>
      <span
        className={"border-r-2 border-lineGrey w-0 my-1 " + heightClass[height]}
      ></span>
      <div>
        <ToPoint />
      </div>
    </div>
  );
};

export default RideLine;

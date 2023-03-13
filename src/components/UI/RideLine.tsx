import React, { FC } from "react";
import FromPoint from "assets/icons/FromPoint";
import ToPoint from "assets/icons/ToPoint";

interface IProps {
  height: any;
  type?: any;
}

const RideLine: FC<IProps> = (props) => {
  const { height, type = "" } = props;

  const heightClass = {
    s: " h-[1px]",
    m: " h-[50px]",
  };
  const styles = type === "newRide" ? " justify-start mt-6" : " justify-center";
  return (
    <div className={"flex flex-col w-[3%] items-center " + styles}>
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

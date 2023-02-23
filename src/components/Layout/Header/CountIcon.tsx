import React, { FC } from "react";

interface IProps {
  count: any;
}

const CountIcon: FC<IProps> = (props) => {
  const createCountString = (count: number) => {
    if (count <= 0) {
      return "0";
    } else if (count > 9) {
      return "9+";
    } else {
      return count;
    }
  };
  return (
    <div
      className={
        "absolute -top-2 -right-2 bg-red-500 rounded-full h-4  flex items-center justify-center " +
        (props?.count > 9 ? "w-5" : "w-4")
      }
    >
      <span className="text-xs text-white">
        {createCountString(props.count)}
      </span>
    </div>
  );
};

export default CountIcon;

import React, { FC } from "react";

interface IProps {
  count: number;
}

const NumberCircle: FC<IProps> = ({ count }) => {
  if (!count) {
    return null;
  }
  return (
    <div className="p-3 h-2 w-2 bg-primary rounded-full flex justify-center items-center">
      <p className="font-normal text-sm text-white"> {count}</p>
    </div>
  );
};

export default NumberCircle;

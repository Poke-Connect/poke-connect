import React, { FC, useEffect } from "react";
import { INPUT_PLACEHOLDER } from "AppConfig";

interface IProps {
  setFromValue: Function;
}

const FixedInput: FC<IProps> = ({ setFromValue }) => {
  useEffect(() => {
    setFromValue(INPUT_PLACEHOLDER);
  }, []);

  return (
    <div
      className={
        "bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg h-12 text-ellipsis"
      }
    >
      <p className="text-lg text-ellipsis line-clamp-1">{INPUT_PLACEHOLDER}</p>
    </div>
  );
};

export default FixedInput;

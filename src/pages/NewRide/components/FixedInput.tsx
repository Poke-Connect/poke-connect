import React, { FC, useEffect } from "react";
import InputField from "./InputField";
import { INPUT_NAME, INPUT_PLACEHOLDER } from "AppConfig";

interface IProps {
  setFromValue: Function;
}

const FixedInput: FC<IProps> = ({ setFromValue }) => {
  useEffect(() => {
    setFromValue(INPUT_PLACEHOLDER);
  }, []);

  return (
    <InputField
      name={INPUT_NAME}
      disabled={true}
      placeholder={INPUT_PLACEHOLDER}
      styles={"placeholder-black"}
    />
  );
};

export default FixedInput;

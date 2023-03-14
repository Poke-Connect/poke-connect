import React, { FC } from "react";

interface IProps {
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  onChange?: any;
  styles?: string;
}

const InputField: FC<IProps> = (props) => {
  const {
    name = "",
    value = "",
    onChange = () => {},
    disabled = true,
    placeholder = "",
    styles = "",
  } = props;
  return (
    <input
      type="location"
      name={name}
      className={`bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg ${styles} h-12 text-ellipsis`}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;

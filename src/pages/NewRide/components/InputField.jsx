import React from "react";

const InputField = (props) => {
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
      className={`bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg ${styles}`}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;

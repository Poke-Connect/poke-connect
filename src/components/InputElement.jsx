import React from "react";

const InputElement = (props) => {
  const { placeholder, originRef, disabled, placeholderTextColor } = props;
  return (
    <input
      className={`bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg placeholder-${placeholderTextColor}`}
      type="location"
      placeholder={placeholder}
      ref={originRef}
      disabled={disabled}
    />
  );
};

export default InputElement;

import React from "react";

const InputElement = (props) => {
  const { placeholderText, originRef, placeholder, disabled, placeholderTextColor } = props;
  return (
    <input
      className={`bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg placeholder-${placeholderTextColor}`}
      type="location"
      placeholderText={placeholderText}
      placeholder={placeholder}
      ref={originRef}
      disabled={disabled}
    />
  );
};

export default InputElement;

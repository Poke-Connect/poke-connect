import React from "react";

const HomeButton = (props) => {
  const { onClick, name, children } = props;
  return (
    <button
      className="bg-black inline-flex items-center justify-between text-white rounded-xl p-4 mb-4 pl-6"
      onClick={onClick}
    >
      {name}
      {children}
    </button>
  );
};

export default HomeButton;
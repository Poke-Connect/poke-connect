import React from "react";

const RoundButton = (props) => {
  const { text, onClickHandler, IconParam } = props;
  return (
    <button
      className="bg-black inline-flex items-center justify-between text-white p-4 mb-4 pl-6 rounded-xl"
      name={text}
      onClick={onClickHandler}
    >
      {text}
      <div>
        <IconParam />
      </div>
    </button>
  );
};

export default RoundButton;

import React from "react";

const ButtonContainer = (props) => {
  const { onFindMatchesHandler, locationValue } = props;
  return (
    <button
      disabled={locationValue ? false : true}
      onClick={onFindMatchesHandler}
      className="bg-black inline-flex py-2 justify-center my-2 text-lg w-5/6 rounded-lg text-white"
    >
      Find Connections
    </button>
  );
};

export default ButtonContainer;

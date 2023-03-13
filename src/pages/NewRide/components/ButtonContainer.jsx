import React from "react";

const ButtonContainer = (props) => {
  const { onFindMatchesHandler, locationValue } = props;
  return (
    <button
      disabled={locationValue ? false : true}
      onClick={onFindMatchesHandler}
      className="bg-black py-2 justify-center text-lg rounded-lg text-white flex my-5 w-full"
    >
      Find Connections
    </button>
  );
};

export default ButtonContainer;

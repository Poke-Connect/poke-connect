import React, { FC } from "react";

interface IProps {
  onFindMatchesHandler: any;
}

const ButtonContainer: FC<IProps> = (props) => {
  const { onFindMatchesHandler } = props;
  return (
    <button
      onClick={onFindMatchesHandler}
      className="bg-black py-2 justify-center text-lg rounded-lg text-white flex mt-5 w-full"
    >
      Find Connections
    </button>
  );
};

export default ButtonContainer;

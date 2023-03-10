import React, { FC } from "react";

interface IProps {
  toggleState: any;
  onToggleHandler: any;
}

const Switch: FC<IProps> = (props) => {
  const { toggleState, onToggleHandler } = props;

  const toggleClass = " transform translate-x-full";

  return (
    <div
      className={
        "md:w-12 md:h-6 w-10 h-5 flex items-center  rounded-full p-1 cursor-pointer drop-shadow-lg transform ease-in-out duration-300  " +
        (toggleState ? "bg-primary" : "bg-gray-300")
      }
      onClick={onToggleHandler}
    >
      <div
        className={
          "bg-white md:w-5 md:h-5 h-4 w-4 rounded-full shadow-md transform ease-in-out duration-300 " +
          (toggleState ? toggleClass : null)
        }
      ></div>
    </div>
  );
};

export default Switch;

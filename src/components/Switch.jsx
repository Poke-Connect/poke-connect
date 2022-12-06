import React, { useState } from "react";

const Switch = (props) => {
  const { toggleState, handleToggleChange } = props;
  const [toggle, setToggle] = useState(toggleState);

  const toggleClass = " transform translate-x-full";

  const onClickHandler = () => {
    handleToggleChange();
    setToggle(!toggle);
  };

  return (
    <div
      className={
        "md:w-12 md:h-6 w-10 h-5 flex items-center  rounded-full p-1 cursor-pointer drop-shadow-lg transform ease-in-out duration-300  " +
        (toggle ? "bg-primary" : "bg-gray-300")
      }
      onClick={onClickHandler}
    >
      <div
        className={
          "bg-white md:w-5 md:h-5 h-4 w-4 rounded-full shadow-md transform ease-in-out duration-300 " +
          (toggle ? toggleClass : null)
        }
      ></div>
    </div>
  );
};

export default Switch;

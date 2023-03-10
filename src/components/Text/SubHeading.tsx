import React, { FC } from "react";

interface IProps {
  text: string;
}

const SubHeading: FC<IProps> = ({ text }) => {
  return (
    <div id="heading" className="bg-white pt-3 flex flex-col ">
      <h2 className="text-xl text-left font-medium">{text}</h2>
    </div>
  );
};

export default SubHeading;

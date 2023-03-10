import React, { FC } from "react";

interface IProps {
  text: string;
}

const Heading: FC<IProps> = ({ text }) => {
  return (
    <div id="heading" className="pt-3">
      <h2 className="text-2xl text-left font-semibold">{text}</h2>
    </div>
  );
};

export default Heading;

import React, { FC } from "react";

interface IProps {
  text: string;
  styles?: string;
}

const Heading: FC<IProps> = ({ text, styles }) => {
  const classes = styles ? `pt-3  ${styles}` : "pt-3";
  return (
    <div id="heading" className={classes}>
      <h2 className="text-2xl text-left font-semibold">{text}</h2>
    </div>
  );
};

export default Heading;

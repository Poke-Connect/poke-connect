import React, { FC } from "react";

interface IProps {
  text: string;
}

const DateTimeText: FC<IProps> = (props) => {
  const { text } = props;
  return <p className="text-typeText text-sm font-light">{text}</p>;
};

export default DateTimeText;

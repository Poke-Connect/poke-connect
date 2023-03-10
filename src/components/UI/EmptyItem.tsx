import React, { FC } from "react";

interface IProps {
  text: string;
}

const EmptyItem: FC<IProps> = (props) => {
  const { text } = props;
  return (
    <div className="w-[100%] mt-10 pl-1 pr-5">
      <p className="text-typeText text-base font-medium mr-10">{text}</p>
    </div>
  );
};

export default EmptyItem;

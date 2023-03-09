import React, { FC } from "react";

interface IProps {
  onClick: any;
  name: any;
  children: any;
}

const HomeButton: FC<IProps> = (props) => {
  const { onClick = () => {}, name, children } = props;
  return (
    <button
      className="bg-black inline-flex items-center justify-between text-white p-4 pl-6 mb-4 border-r-4 border-b-4 border-primary rounded-lg shadow-md hover:shadow-lg"
      onClick={onClick}
    >
      {name}
      {children}
    </button>
  );
};

export default HomeButton;

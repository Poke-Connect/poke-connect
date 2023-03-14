import React, { FC } from "react";

interface IProps {
  text: string;
  onClickHandler: () => void;
}

const LinkText: FC<IProps> = (props) => {
  const { text = "", onClickHandler = () => {} } = props;
  return (
    <p className="text-primary text-sm underline pt-2" onClick={onClickHandler}>
      {text}
    </p>
  );
};

export default LinkText;

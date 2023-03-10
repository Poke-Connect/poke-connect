import React, { FC } from "react";

interface IProps {
  IconParam: any;
  onClickHandler: any;
}

const IconButton: FC<IProps> = (props) => {
  const { IconParam, onClickHandler } = props;
  return (
    <button onClick={onClickHandler}>
      <IconParam />
    </button>
  );
};

export default IconButton;

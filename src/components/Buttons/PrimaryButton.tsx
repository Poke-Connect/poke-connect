import React, { FC } from "react";

interface IProps {
  text: any;
  onClickHandler: any;
  IconParam?: any;
  styles?: string;
}

const PrimaryButton: FC<IProps> = (props) => {
  const { text, onClickHandler, IconParam, styles = "" } = props;
  return (
    <button
      onClick={onClickHandler}
      className={
        "bg-black text-white w-[70%] items-center p-2 border-primary border-r-4 border-b-4 " +
        styles
      }
    >
      {text}
      {IconParam && (
        <div>
          <IconParam />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;

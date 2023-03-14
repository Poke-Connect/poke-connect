import React, { FC } from "react";

interface IProps {
  text: any;
  onClickHandler: any;
  IconParam?: any;
  styles?: string;
}

const SecondaryButton: FC<IProps> = (props) => {
  const { text, onClickHandler, IconParam, styles = "" } = props;
  return (
    <button
      className={
        "bg-black inline-flex items-center justify-between text-white p-4 mb-4 pl-6 rounded-xl " +
        styles
      }
      name={text}
      onClick={onClickHandler}
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

export default SecondaryButton;

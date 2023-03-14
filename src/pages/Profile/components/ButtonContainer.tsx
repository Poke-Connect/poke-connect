import React, { FC } from "react";

interface IProps {
  isNew: boolean;
  isEditing: boolean;
  cancelChangesHandler: () => void;
  skipChangesHandler: () => void;
}

const ButtonContainer: FC<IProps> = (props) => {
  const { isNew, isEditing, cancelChangesHandler, skipChangesHandler } = props;

  if (!isEditing) {
    return null;
  }

  const buttonText1 = "Save changes";
  const buttonText2 = isNew ? "Skip for now" : "Cancel";

  return (
    <div
      id="button"
      className="flex flex-row flex-2 items-start justify-between p-4"
    >
      <button
        type={"button"}
        onClick={isNew ? skipChangesHandler : cancelChangesHandler}
        className="bg-white text-primary underline p-1 pl-4 pr-4 text-base underline-offset-2 font-semibold"
      >
        {buttonText2}
      </button>
      <button type={"submit"} className="bg-black text-white p-1 pl-4 pr-4">
        <p className="text-base">{buttonText1}</p>
      </button>
    </div>
  );
};

export default ButtonContainer;

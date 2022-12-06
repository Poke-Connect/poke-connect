import React from "react";

const ButtonContainer = (props) => {
  const { isNew, isEditing, cancelChangesHandler, skipChangesHandler } = props;
  const buttonText1 = isNew ? "Sign up" : "Save changes";
  const buttonText2 = isNew ? "Skip for now" : "Cancel";
  if (!isEditing) {
    return null;
  }
  return (
    <div
      id="button"
      className="flex flex-row flex-2 items-start justify-between p-4"
    >
      <button type={"submit"} className="bg-black text-white p-1 pl-4 pr-4">
        {buttonText1}
      </button>
      <button
        type={"button"}
        onClick={isNew ? skipChangesHandler : cancelChangesHandler}
        className="bg-white text-primary underline p-1 pl-4 pr-4"
      >
        {buttonText2}
      </button>
    </div>
  );
};

export default ButtonContainer;

//STALE_FILE
import React, { FC } from "react";
import LocationIcon from "assets/icons/LocationIcon";

interface IProps {
  main_text: string;
  secondary_text: string;
}

const SuggestionItem: FC<IProps> = (props) => {
  const { main_text, secondary_text } = props;
  return (
    <>
      <div className="flex w-1/5 justify-center my-auto">
        <LocationIcon />
      </div>
      <div className="flex flex-col w-4/5">
        <p className="font-semibold text-lg">{main_text}</p>{" "}
        <p className="text-typeText text-sm">{secondary_text}</p>
      </div>
    </>
  );
};

export default SuggestionItem;

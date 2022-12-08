import React from "react";
import { capitaliseFirstLetter } from "helpers/utils";

const ProfileElement = (props) => {
  const { header, body } = props;
  return (
    <div className="pt-5 flex flex-col items-start mr-2">
      <div className="font-semibold text-sm">
        {capitaliseFirstLetter(header)}
      </div>
      <div className="pr-2 w-full">
        <p className="font-normal text-sm text-left w-full break-words">
          {body}
        </p>
      </div>
    </div>
  );
};

export default ProfileElement;

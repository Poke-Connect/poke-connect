import React from "react";
import { capitaliseFirstLetter } from "helpers/utils";

const ProfileElement = (props) => {
  const { header, body } = props;
  return (
    <div className="mobile pt-5 flex flex-col items-start">
      <div className="font-semibold text-sm">
        {capitaliseFirstLetter(header)}
      </div>
      <div className="font-normal text-sm text-left">{body}</div>
    </div>
  );
};

export default ProfileElement;

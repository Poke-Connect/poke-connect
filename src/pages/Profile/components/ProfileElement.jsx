import React from "react";

const ProfileElement = (props) => {
  const { header, body } = props;
  return (
    <div className="mobile pt-5 flex flex-col items-start">
      <div className="font-semibold text-sm">{header}</div>
      <div className="font-normal text-sm text-left">{body}</div>
    </div>
  );
};

export default ProfileElement;

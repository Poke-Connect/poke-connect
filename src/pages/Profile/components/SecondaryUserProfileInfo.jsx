import React from "react";
import ProfileElement from "./ProfileElement";

const TO_IGNORE = ["linkedIn", "mobile", "gender"];

const SecondaryUserProfileInfo = (props) => {
  const { secondaryInfo } = props;

  const createSecondaryInfo = () => {
    const rows = [];
    for (let info in secondaryInfo) {
      if (!TO_IGNORE.includes(info) && secondaryInfo[info]) {
        rows.push(
          <ProfileElement key={info} header={info} body={secondaryInfo[info]} />
        );
      }
    }
    return <>{rows}</>;
  };

  return <div className="pl-3">{createSecondaryInfo()}</div>;
};

export default SecondaryUserProfileInfo;

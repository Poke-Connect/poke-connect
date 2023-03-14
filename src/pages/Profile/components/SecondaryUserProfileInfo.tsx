import React, { FC } from "react";
import ProfileElement from "./ProfileElement";

interface IProps {
  secondaryInfo: any;
}

const TO_IGNORE = ["linkedIn", "mobile", "gender"];

const SecondaryUserProfileInfo: FC<IProps> = (props) => {
  const { secondaryInfo } = props;

  const createSecondaryInfo = () => {
    const rows: any[] = [];
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

import React from "react";
import ProfileElement from "./ProfileElement";

const SecondaryProfileInfo = (props) => {
  const { userSecondaryInfo } = props;

  const createSecondaryInfo = () => {
    const rows = [];
    for (let info in userSecondaryInfo) {
      rows.push(
        <ProfileElement
          key={info}
          header={info}
          body={userSecondaryInfo[info]}
        />
      );
    }
    return <>{rows}</>;
  };

  return <div className="pl-3">{createSecondaryInfo()}</div>;
};

export default SecondaryProfileInfo;

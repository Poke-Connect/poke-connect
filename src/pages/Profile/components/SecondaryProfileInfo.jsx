import React from "react";
import ProfileElement from "./ProfileElement";

const SecondaryProfileInfo = (props) => {
  const { secondaryInfo } = props;

  const createSecondaryInfo = () => {
    const rows = [];
    for (let info in secondaryInfo) {
      rows.push(
        <ProfileElement key={info} header={info} body={secondaryInfo[info]} />
      );
    }
    return <>{rows}</>;
  };

  return <div className="pl-5 pb-5 pt-2 mr-5 ">{createSecondaryInfo()}</div>;
};

export default SecondaryProfileInfo;

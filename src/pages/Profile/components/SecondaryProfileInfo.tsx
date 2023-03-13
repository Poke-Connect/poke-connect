import React, { FC } from "react";
import ProfileElement from "./ProfileElement";

interface IProps {
  secondaryInfo: any;
}

const SecondaryProfileInfo: FC<IProps> = (props) => {
  const { secondaryInfo } = props;

  const createSecondaryInfo = () => {
    const rows: any[] = [];
    for (let info in secondaryInfo) {
      rows.push(
        secondaryInfo[info] && (
          <ProfileElement key={info} header={info} body={secondaryInfo[info]} />
        )
      );
    }
    return <>{rows}</>;
  };

  return <div className="pl-5 pb-5 pt-2 mr-5 ">{createSecondaryInfo()}</div>;
};

export default SecondaryProfileInfo;

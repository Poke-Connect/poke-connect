import React, { FC } from "react";
import {
  PrimaryUserProfileInfo,
  SecondaryUserProfileInfo,
} from "../components";
import { getSecondaryInfo } from "../helper";

interface IProps {
  profileData: any;
}

const OtherProfile: FC<IProps> = (props) => {
  const { profileData } = props;

  const { displayName = "", linkedIn = "", photoURL = "" } = profileData;
  const secondaryInfo = getSecondaryInfo(profileData);
  return (
    <div>
      <div className="pt-6 pb-10 px-5">
        <PrimaryUserProfileInfo
          displayName={displayName}
          photoURL={photoURL}
          linkedIn={linkedIn}
        />
        <SecondaryUserProfileInfo secondaryInfo={secondaryInfo} />
      </div>
    </div>
  );
};

export default OtherProfile;

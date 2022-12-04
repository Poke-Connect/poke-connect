import React from "react";
import PrimaryUserProfileInfo from "./PrimaryUserProfileInfo";
import SecondaryUserProfileInfo from "./SecondaryUserProfileInfo";
import { getSecondaryInfo } from "../helper";

const UserProfileContainer = (props) => {
  const { profileData } = props;
  if (!profileData) {
    return null;
  }
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

export default UserProfileContainer;

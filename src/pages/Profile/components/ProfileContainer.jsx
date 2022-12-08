import React from "react";
import PrimaryProfileInfo from "./PrimaryProfileInfo";
import SecondaryProfileInfo from "./SecondaryProfileInfo";
import { getSecondaryInfo } from "../helper";

const ProfileContainer = (props) => {
  const { profileData } = props;
  if (!profileData) {
    return null;
  }
  const { displayName = "", email = "", photoURL = "" } = profileData;
  const secondaryInfo = getSecondaryInfo(profileData);
  return (
    <div className="pt-3 pb-10 pl-6 w-screen ">
      <PrimaryProfileInfo
        displayName={displayName}
        email={email}
        photoURL={photoURL}
      />
      <SecondaryProfileInfo secondaryInfo={secondaryInfo} />
      <div className="logout flex pl-3 pt-5 ">
        <button className="bg-black text-white px-5 py-1.5 font-sm font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileContainer;

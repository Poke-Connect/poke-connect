import React from "react";
import SelfProfile from "./SelfProfile";
import OtherProfile from "./OtherProfile";

const UserProfileContainer = (props) => {
  const { profileData, selfId } = props;
  if (!profileData) {
    return null;
  }
  const self = profileData._id === selfId;

  return self ? (
    <SelfProfile profileData={profileData} />
  ) : (
    <OtherProfile profileData={profileData} />
  );
};

export default UserProfileContainer;

import React, { FC } from "react";
import { OtherProfile, SelfProfile } from ".";

interface IProps {
  profileData: any;
  selfId: string;
}

const ProfileContainer: FC<IProps> = (props) => {
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

export default ProfileContainer;

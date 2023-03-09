import React, { FC } from "react";
import { useParams } from "react-router-dom";
import ProfileContainer from "./components/ProfileContainer";
import { useSelector } from "react-redux";
import { useProfileData } from "customHooks";

const Profile: FC = () => {
  const { user } = useSelector((store: any) => store.auth);
  const params = useParams();
  const { userId = "" } = params;
  const { profileData } = useProfileData(userId);

  return (
    profileData && (
      <ProfileContainer profileData={profileData} selfId={user?._id} />
    )
  );
};

export default Profile;

import React, { FC } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProfileData } from "customHooks";
import { useAppSelector } from "hooks";
import { EditProfileForm } from "../containers";

const EditProfile: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const params = useParams();
  const { userId = "" } = params;
  const { profileData } = useProfileData(userId);

  const location = useLocation();
  const isNew = location?.state?.newUser ?? false;

  if (user._id !== userId) {
    return null;
  }

  return (
    profileData && <EditProfileForm profileData={profileData} isNew={isNew} />
  );
};

export default EditProfile;

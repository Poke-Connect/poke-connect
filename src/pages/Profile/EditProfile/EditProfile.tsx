import React, { FC } from "react";
import EditProfileForm from "../components/EditProfileForm";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProfileData } from "customHooks";

const EditProfile: FC = () => {
  const { user } = useSelector((store: any) => store.auth);
  const params = useParams();
  const { userId = "" } = params;

  const { profileData } = useProfileData(userId);

  const location = useLocation();
  const isNew = location?.state?.newUser ?? false;

  if (user._id !== userId) {
    console.log("No user found");
    return null;
  }

  return (
    profileData && <EditProfileForm profileData={profileData} isNew={isNew} />
  );
};

export default EditProfile;

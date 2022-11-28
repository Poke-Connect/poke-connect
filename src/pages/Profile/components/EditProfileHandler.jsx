import React from "react";
import EditProfileForm from "./EditProfileForm";

const EditProfileHandler = ({ profileData }) => {
  if (!profileData) {
    return null;
  }
  return <EditProfileForm profileData={profileData} />;
};

export default EditProfileHandler;

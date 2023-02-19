import React, { useEffect, useState } from "react";
import { UserAuth } from "context/AuthProvider";
import EditProfileForm from "./components/EditProfileForm";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getUser } from "api/user";

const EditProfile = () => {
  const { user } = UserAuth();
  const params = useParams();
  const { userId } = params;

  const [profileData, setProfileData] = useState(null);
  const location = useLocation();
  const isNew = location?.state?.newUser ?? false;

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getUser(userId);
      setProfileData(profile);
    };

    userId && fetchProfile();
  }, [userId]);

  if (user._id !== userId) {
    console.log("returning null");
    return null;
  }

  return (
    profileData && <EditProfileForm profileData={profileData} isNew={isNew} />
  );
};

export default EditProfile;

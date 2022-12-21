import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "context/AuthProvider";
import EditProfileForm from "./components/EditProfileForm";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const location = useLocation();
  const isNew = location?.state?.newUser ?? false;

  const { user } = UserAuth();
  const { uid } = user;

  const db = getDatabase();

  const profileRef = ref(db, `users/${uid}`);

  useEffect(() => {
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfileData(data);
    });
  }, []);

  return (
    profileData && <EditProfileForm profileData={profileData} isNew={isNew} />
  );
};

export default EditProfile;

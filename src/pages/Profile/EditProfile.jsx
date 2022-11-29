import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { UserAuth } from "../../context/AuthContext";
import EditProfileHandler from "./components/EditProfileHandler";

const EditProfile = () => {
  const [profileData, setProfileData] = useState(null);

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

  return <EditProfileHandler profileData={profileData} />;
};

export default EditProfile;

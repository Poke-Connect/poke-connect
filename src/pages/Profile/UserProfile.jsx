import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import UserProfileContainer from "./components/UserProfileContainer";

const UserProfile = () => {
  const params = useParams();
  const { uid } = params;

  const [profileData, setProfileData] = useState(null);

  const db = getDatabase();

  const userRef = ref(db, `users/${uid}`);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setProfileData(data);
    });
  }, []);

  return profileData && <UserProfileContainer profileData={profileData} />;
};

export default UserProfile;

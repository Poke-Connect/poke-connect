import React, { useState, useEffect } from "react";
import { UserAuth } from "context/AuthContext";
import { getDatabase, onValue, ref } from "firebase/database";
import ProfileContainer from "./components/ProfileContainer";

const Profile = () => {
  const { user, logOut } = UserAuth();
  const userId = user.uid;
  const [profileData, setProfileData] = useState(null);

  const db = getDatabase();

  const userRef = ref(db, `users/${userId}`);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setProfileData(data);
    });
  }, []);

  return <ProfileContainer profileData={profileData} logOut={logOut} />;
};

export default Profile;

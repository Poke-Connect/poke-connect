import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { getDatabase, onValue, ref } from "firebase/database";
import ProfileContainer from "./components/ProfileContainer";

const MyProfile = () => {
  const { user } = UserAuth();
  const userId = user.uid;
  const [profileData, setProfileData] = useState(null);

  const db = getDatabase();

  const myTripsRef = ref(db, `users/${userId}`);

  useEffect(() => {
    onValue(myTripsRef, (snapshot) => {
      const data = snapshot.val();
      setProfileData(data);
    });
  }, []);

  return <ProfileContainer profileData={profileData} />;
};

export default MyProfile;

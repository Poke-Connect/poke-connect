import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { getDatabase, onValue, ref } from "firebase/database";
import ProfileContainer from "./components/ProfileContainer";
import EditProfile from "./components/EditProfile";

const MyProfile = () => {
  const { user } = UserAuth();
  const userId = user.uid;
  // const location = useLocation();
  // const editMode = location.state?.edit ? location.state?.edit : false;
  const [editMode, setEditMode] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const db = getDatabase();

  const myTripsRef = ref(db, `users/${userId}`);

  useEffect(() => {
    onValue(myTripsRef, (snapshot) => {
      const data = snapshot.val();
      setProfileData(data);
    });
  }, []);

  return editMode ? (
    <EditProfile profileData={profileData} />
  ) : (
    <ProfileContainer profileData={profileData} />
  );
};

export default MyProfile;

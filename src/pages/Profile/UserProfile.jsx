import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserProfileContainer from "./components/UserProfileContainer";
import { getUser } from "api/user";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const { userId } = params;

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getUser(userId);
      setProfileData(profile);
    };
    userId && fetchProfile();
  }, [userId]);

  return (
    profileData && (
      <UserProfileContainer profileData={profileData} selfId={user?._id} />
    )
  );
};

export default UserProfile;

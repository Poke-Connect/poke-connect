import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import ProfileContainer from "./components/ProfileContainer";
import { getUser } from "api/user";
import { useSelector } from "react-redux";

const Profile: FC = () => {
  const { user } = useSelector((store: any) => store.auth);
  const params = useParams();
  const { userId } = params;

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        const profile = await getUser(userId);
        setProfileData(profile);
      }
    };
    fetchProfile();
  }, [userId]);

  return (
    profileData && (
      <ProfileContainer profileData={profileData} selfId={user?._id} />
    )
  );
};

export default Profile;

import { useState, useEffect } from "react";
import { getUser } from "api/user";

export const useProfileData = (userId: string) => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        const profile = await getUser(userId);
        setProfileData(profile);
      }
    };
    fetchProfile();
  }, [userId]);

  return { profileData };
};

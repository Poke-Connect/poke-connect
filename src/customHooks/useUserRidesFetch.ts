import { getUserRides } from "api/ride";
import { useEffect, useState } from "react";

export const useUserRidesFetch = (userId: any) => {
  const [myTrips, setMyTrips] = useState<any>([]);

  useEffect(() => {
    const fetchUserRides = async () => {
      const rides = await getUserRides(userId);
      setMyTrips(rides);
    };

    userId && fetchUserRides();
  }, [userId]);

  return myTrips;
};

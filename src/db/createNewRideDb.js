import { getDatabase, ref, set } from "firebase/database";
import { createDateString, createTimeStamp } from "helpers/dateHelper";

export const createNewRideDb = (
  rideId,
  rideType,
  userId,
  dateValue,
  timeValue,
  locationValue
) => {
  const db = getDatabase();

  const ridesDbRef = ref(db, `rides/${rideId}`);
  const userRidesDbRef = ref(db, `userRides/${userId}/${rideId}`);

  const date = createDateString(dateValue);
  const timeStampRide = createTimeStamp(dateValue, timeValue);

  const rideData = {
    rideType,
    userId,
    date,
    timeStampRide,
    rideId,
    location: locationValue,
    discoverability: true,
    time: timeValue,
  };

  set(ridesDbRef, rideData);
  set(userRidesDbRef, {
    timeStampRide,
  });
};

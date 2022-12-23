import { getDatabase, ref, set } from "firebase/database";
import { createDateString, createTimeStamp } from "helpers/dateHelper";
import { Timestamp } from "firebase/firestore";

export const createNewRideDb = (
  rideId,
  rideType,
  userId,
  dateValue,
  timeValue,
  locationValue,
  distance
) => {
  const db = getDatabase();

  const ridesDbRef = ref(db, `rides/${rideId}`);
  const userRidesDbRef = ref(db, `userRides/${userId}/${rideId}`);

  const date = createDateString(dateValue);
  const timeStampRide = createTimeStamp(dateValue, timeValue);

  const rideData = {
    createdAt: Timestamp.now(),
    rideType,
    userId,
    date,
    timeStampRide,
    rideId,
    distance,
    location: locationValue,
    discoverability: true,
    time: timeValue,
  };

  set(ridesDbRef, rideData);
  set(userRidesDbRef, {
    timeStampRide,
  });
};

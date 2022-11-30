import { getCurrentTimeStamp } from "../../helpers/dateHelper";

export const getfilteredTrips = (myTrips) => {
  const upcomingTrips = [];
  const completedTrips = [];
  const curTimeStamp = getCurrentTimeStamp();
  for (const tripId of Object.keys(myTrips)) {
    if (curTimeStamp - myTrips[tripId].timeStampRide <= 3600) {
      upcomingTrips.push(tripId);
    } else {
      completedTrips.push(tripId);
    }
  }
  return [upcomingTrips, completedTrips];
};

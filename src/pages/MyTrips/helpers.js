import { getCurrentTimeStamp } from "../../helpers/dateHelper";


//Time handling
export const getfilteredTrips = (myTrips) => {
  const upcomingTrips = [];
  const completedTrips = [];
  const curTimeStamp = getCurrentTimeStamp();
  for (let trip of myTrips) {
    if (curTimeStamp - trip.timeStampRide <= 3600) {
      upcomingTrips.push(trip);
    } else {
      completedTrips.push(trip);
    }
  }
  return [upcomingTrips, completedTrips];
};

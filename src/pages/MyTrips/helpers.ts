import { getCurrentTimeStamp } from "helpers/dateHelper";

export const getfilteredTrips = (myTrips: any) => {
  const upcomingTrips: any[] = [];
  const completedTrips: any[] = [];
  const curTimeStamp = getCurrentTimeStamp();
  for (let trip of myTrips) {
    if (curTimeStamp - trip.timeStampRide <= 3600) {
      upcomingTrips.push(trip);
    } else {
      completedTrips.push(trip);
    }
  }
  return [upcomingTrips.reverse(), completedTrips.reverse()];
};

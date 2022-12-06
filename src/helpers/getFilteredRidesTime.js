import { createRoute } from "./createRoute";

const findTimeBetweenTwoPoints = async (origin, destination) => {
  return createRoute(origin, destination);
};

const sortArrByTime = (preFilteredRides, ridesArr) => {
  const timesArr = [];
  for (const i in ridesArr) {
    const time = ridesArr[i].routes[0].legs[0].duration.value;
    const distance = ridesArr[i].routes[0].legs[0].distance.value;
    timesArr.push([preFilteredRides[i], time, distance]);
  }
  timesArr.sort((a, b) => a[1] - b[1]);
  return timesArr;
};

export const getFilteredRidesTime = async (
  allRides,
  preFilteredRides,
  requestRide
) => {
  const promisesArr = [];
  for (const rideId of preFilteredRides) {
    const reqPromise = findTimeBetweenTwoPoints(
      allRides[rideId].location,
      requestRide.location
    );
    promisesArr.push(reqPromise);
  }
  const res = await Promise.all(promisesArr);
  const timesArr = sortArrByTime(preFilteredRides, res);

  return timesArr;
};

//TODO: Use Haversine Formula --> to minimise the use of locations api

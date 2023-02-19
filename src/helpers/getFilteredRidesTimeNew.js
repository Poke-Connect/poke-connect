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

export const getFilteredRidesTimeNew = async (myRide, filteredRides) => {
  if (!myRide || !filteredRides) {
    return [];
  }

  const promisesArr = [];
  for (const ride of filteredRides) {
    const reqPromise = findTimeBetweenTwoPoints(ride.location, myRide.location);
    promisesArr.push(reqPromise);
  }
  const res = await Promise.all(promisesArr);

  const timesArr = sortArrByTime(filteredRides, res);

  return timesArr;
};

//TODO: Use Haversine Formula --> to minimise the use of locations api

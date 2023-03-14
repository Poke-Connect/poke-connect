//STALE_FILE

const getLocality = (locationItem) => {
  if (!locationItem) {
    return;
  }
  const stringifiedItem = JSON.stringify(locationItem);
  const itemArr = stringifiedItem.split(",");
  const newLocationArr = [];

  for (let i = itemArr.length - 4; i >= 0; i--) {
    newLocationArr.push(itemArr[i]);
  }
  return newLocationArr;
};

//TODO: Make this function better by matching more params
const getMatchScore = (area1, area2) => {
  const locality1 = getLocality(area1);
  const locality2 = getLocality(area2);

  let score = 0;
  let i = 0;
  while (i < locality1.length && i < locality2.length) {
    if (locality1[i] === locality2[i]) {
      score += 10;
      i += 1;
    } else {
      i = 1000;
    }
  }
  return score;
};

const getAreaRides = (allRides, preFilteredRides, requestLocation) => {
  const scoreArray = [];
  preFilteredRides.forEach((rideId) => {
    const score = getMatchScore(allRides[rideId].location, requestLocation);
    scoreArray.push([rideId, score]);
  });
  scoreArray.sort((a, b) => a[1] - b[1]);
  return scoreArray.reverse();
};

export const getFilteredRidesLocality = (
  allRides,
  preFilteredRides,
  requestRide
) => {
  if (!allRides || !requestRide) {
    return [];
  }

  const sortedMatchingRides = getAreaRides(
    allRides,
    preFilteredRides,
    requestRide.location
  );

  return sortedMatchingRides;
};

const checkIfTimeDiffValid = (timeStamp1, timeStamp2) => {
  const validTimeDiff = 2 * 60 * 60; //2hrs -> seconds
  const isValid = Math.abs(timeStamp1 - timeStamp2) <= validTimeDiff;
  return isValid;
};

const getTimeRides = (allRides, rideTime) => {
  const filteredTimeRides = Object.keys(allRides).filter(
    (rideId) => checkIfTimeDiffValid(allRides[rideId].timeStampRide, rideTime) //seconds
  );
  return filteredTimeRides;
};

const getTypeRides = (allRides, filteredRides, rideType) => {
  const filteredTypeRides = filteredRides.filter(
    (rideId) => allRides[rideId].rideType === rideType
  );
  return filteredTypeRides;
};

const getDiscoverableRides = (allRides, filteredRides) => {
  const discoverableRides = filteredRides.filter(
    (rideId) => allRides[rideId].discoverability === true
  );
  return discoverableRides;
};

const getOtherUsersRides = (allRides, filteredRides, creatorId) => {
  const filteredTypeRides = filteredRides.filter(
    (rideId) => allRides[rideId].creatorId !== creatorId
  );
  return filteredTypeRides;
};

export const getPreFilteredRides = (myRide, allRides) => {
  if (!allRides || !myRide) {
    return [];
  }

  const filteredTimeRides = getTimeRides(allRides, myRide.timeStampRide);

  const filteredTypeRides = getTypeRides(
    allRides,
    filteredTimeRides,
    myRide.rideType
  );

  const discoverableRides = getDiscoverableRides(allRides, filteredTypeRides);

  const otherUsersRide = getOtherUsersRides(
    allRides,
    discoverableRides,
    myRide.creatorId
  );

  return otherUsersRide;
};

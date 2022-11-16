const getOtherRides = (allRides, requestRideId, rideType) => {
  const filteredOtherRides = Object.keys(allRides).filter(
    (rideId) => rideId !== requestRideId
  );
  return filteredOtherRides;
};

const getTypeRides = (allRides, filteredOtherRides, rideType) => {
  const filteredTypeRides = filteredOtherRides.filter(
    (rideId) => allRides[rideId].rideType === rideType
  );
  return filteredTypeRides;
};

const getDateRides = (allRides, filteredTypeRides, rideDate) => {
  const filteredDateRides = filteredTypeRides.filter(
    (rideId) => allRides[rideId].date === rideDate
  );
  return filteredDateRides;
};

const getTimeRides = (allRides, filteredDateRides, rideTime) => {
  const filteredTimeRides = filteredDateRides.filter(
    (rideId) => Math.abs((rideId) => allRides[rideId].time - rideTime) <= 3600 //seconds
  );
  return filteredTimeRides;
};

export const getPreFilteredRides = (allRides, requestRide) => {
  if (!allRides || !requestRide) {
    return [];
  }
  const filteredOtherRides = getOtherRides(
    allRides,
    requestRide.rideId,
    requestRide.rideType
  );
  const filteredTypeRides = getTypeRides(
    allRides,
    filteredOtherRides,
    requestRide.rideType
  );
  const filteredDateRides = getDateRides(
    allRides,
    filteredTypeRides,
    requestRide.rideDate
  );
  const filteredTimeRides = getTimeRides(
    allRides,
    filteredDateRides,
    requestRide.time
  );

  // return filteredTimeRides; --> Change to this
  return filteredTypeRides;
};

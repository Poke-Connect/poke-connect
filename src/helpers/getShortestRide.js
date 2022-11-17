const calculateRoute = async (originValue, destinationValue) => {
  if (originValue === "" || destinationValue === "") {
    return;
  }
  // eslint-disable-next-line no-undef
  const directionsService = new google.maps.DirectionsService();

  const results = await directionsService.route({
    origin: originValue,
    destination: destinationValue,
    // eslint-disable-next-line no-undef
    travelMode: google.maps.TravelMode.DRIVING,
  });
  return results;
};

export const getShortestRides = async (
  allRides,
  filteredTimeRides,
  requestLocation
) => {
  const scoreArray = [];
  console.log('eneer here')
  //   const results = await Promise.all(
  //     filteredTimeRides.map((rideId) => {
  //       return {
  //         rideId: rideId,
  //         route: calculateRoute(allRides[rideId].location, requestLocation),
  //       };
  //     })
  //   );
  //   console.log("results", results);
  //   console.log("scoreArray", scoreArray);

  for (const rideId of filteredTimeRides) {
    const location = allRides[rideId].location;
    const route = await calculateRoute(location, requestLocation);
    const duration = await route.routes[0].legs[0].duration.value;
    scoreArray.push([rideId, duration]);
  }

  //   console.log(scoreArray);
  scoreArray.sort((a, b) => a[1] - b[1]);
  const finalArr = createRideObjArr(scoreArray, allRides);

  console.log("finalArr", finalArr);

  return finalArr;
};

const createRideObjArr = (sortedArr, allRides) => {
  console.log("createRideObjArr 0 ");

  const arr = [];
  sortedArr.forEach((element) => {
    const arrObj = allRides[element[0]];
    arr.push({ ...arrObj, score: element[1] });
  });
  console.log("createRideObjArr 1 ");

  return arr;
};

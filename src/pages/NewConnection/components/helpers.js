//STALE_FILE

const calculateRouteTime = (route) => {
  let timeTaken = 0;
  route.legs.map((leg) => (timeTaken = timeTaken + leg.duration.value));
  return timeTaken;
};

const calculateRouteDistance = (route) => {
  let distance = 0;
  route.legs.map((leg) => (distance = distance + leg.distance.value));
  return distance;
};

const createWayPtsArr = (waypts) => {
  const wayptsArr = [];

  waypts.forEach((waypt) => {
    const wayptElem = { location: waypt, stopover: true };
    wayptsArr.push(wayptElem);
  });
  return wayptsArr;
};

const createRouteObject = async (
  originValue,
  destinationValue,
  waypointValues
) => {
  const waypts = createWayPtsArr([waypointValues]);
  const routeResults = await calculateRoute(
    originValue,
    destinationValue,
    waypts
  );
  const routeTime = calculateRouteTime(routeResults.routes[0]);
  const routeDistance = calculateRouteDistance(routeResults.routes[0]);

  return {
    origin: originValue,
    destination: destinationValue,
    waypoints: waypointValues,
    routeTime: routeTime,
    routeDistance: routeDistance,
    routeResults: routeResults,
  };
};

//same origin Value
export const calculateMinRouteSameOrigin = async (
  originValue,
  destinationValue,
  waypointValues
) => {
  const route1 = await createRouteObject(
    originValue,
    waypointValues,
    destinationValue
  );
  const route2 = await createRouteObject(
    originValue,
    destinationValue,
    waypointValues
  );
  if (route1.routeTime <= route2.routeTime) {
    return route1;
  } else {
    return route2;
  }
};

//same destination Value
export const calculateMinRouteSameDestination = async (
  originValue,
  destinationValue,
  waypointValues
) => {
  const route1 = await createRouteObject(
    originValue,
    waypointValues,
    destinationValue
  );
  const route2 = await createRouteObject(
    waypointValues,
    originValue,
    destinationValue
  );
  if (route1.routeTime <= route2.routeTime) {
    return route1;
  } else {
    return route2;
  }
};

//no same Value
export const calculateMinRouteNoSame = async (
  origin1Value,
  destination1Value,
  origin2Value,
  destination2Value
) => {
  /** MATCHING ALGORITHM
   * Order --> origin1 < destination1
   *       --> origin2 < destination2
   *       --> origin2 < destination1 - Limiting condition
   * Case1: origin1 < origin2 < destination2 < destination1
   * Case2: origin1 < origin2 < destination1 < destination2
   */
  //TODO - Limiting case (above)
  const waypts1 = createWayPtsArr([origin2Value, destination2Value]);
  const route1 = await calculateRoute(
    origin1Value,
    destination1Value,
    waypts1,
    false
  );

  const waypts2 = createWayPtsArr([origin2Value, destination1Value]);
  const route2 = await calculateRoute(
    origin1Value,
    destination2Value,
    waypts2,
    false
  );

  const routeTime1 = calculateRouteTime(route1.routes[0]);
  const routeTime2 = calculateRouteTime(route2.routes[0]);
  const routeDistance1 = calculateRouteTime(route1.routes[0]);
  const routeDistance2 = calculateRouteTime(route2.routes[0]);

  if (routeTime1 < routeTime2) {
    return {
      origin: origin1Value,
      destination: destination1Value,
      waypoints: [origin2Value, destination2Value],
      routeTime: routeTime1,
      routeDistance: routeDistance1,
      routeResults: route1,
    };
  } else {
    return {
      origin: origin1Value,
      destination: destination2Value,
      waypoints: [origin2Value, destination1Value],
      routeTime: routeTime2,
      routeDistance: routeDistance2,
      routeResults: route2,
    };
  }
};

/** CACLUATING MATCHING DELTA
 * How will we calculate - who to match with
 * Limiting the matches based on above cases
 * Order of matching
 */

/**LIMITING
 * From geocoded path ways we know the sequence of route
 * If the shortest sequence is O1->D1->O2->D2, we know this is not a match
 * Ignore these matches (above)
 */

export const calculateRoute = async (
  originValue,
  destinationValue,
  waypoints = [],
  optimizeWaypoints = true
) => {
  if (originValue === "" || destinationValue === "") {
    return;
  }

  //   const waypts = createWayPtsArr([waypointValues]);

  // eslint-disable-next-line no-undef
  const directionsService = new google.maps.DirectionsService();

  const results = await directionsService.route({
    origin: originValue,
    destination: destinationValue,
    // eslint-disable-next-line no-undef
    travelMode: google.maps.TravelMode.DRIVING,
    // waypoints: waypoints,
    // optimizeWaypoints: optimizeWaypoints,
  });

  return results;
};

import { createRoute } from "helpers/createRoute";

// eslint-disable-next-line no-undef
const DESTINATION_RIDE = "DESTINATION_RIDE"; // From X --> TO_AIRPORT

export const getRouteObject = async (
  rideType,
  locationValue,
  airportCordinates
) => {
  if (!rideType) {
    return {};
  } else if (rideType === DESTINATION_RIDE) {
    return createRoute(locationValue, airportCordinates);
  } else {
    return createRoute(airportCordinates, locationValue);
  }
};

export const getTripDistance = (minRouteObject) => {
  const distValue = minRouteObject?.routes[0]?.legs[0]?.distance.value;
  return distValue ? distValue : 0;
};

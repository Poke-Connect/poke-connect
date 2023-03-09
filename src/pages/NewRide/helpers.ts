import { createRoute } from "helpers/createRoute";
import { COMMON_STRINGS } from "appConstants";

const { DESTINATION_RIDE } = COMMON_STRINGS;

export const getRouteObject = async (
  rideType: any,
  locationValue: any,
  airportCordinates: any
) => {
  if (!rideType) {
    return {};
  } else if (rideType === DESTINATION_RIDE) {
    return createRoute(locationValue, airportCordinates);
  } else {
    return createRoute(airportCordinates, locationValue);
  }
};

export const getTripDistance = (minRouteObject: any) => {
  const distValue = minRouteObject?.routes[0]?.legs[0]?.distance.value;
  return distValue ? distValue : 0;
};

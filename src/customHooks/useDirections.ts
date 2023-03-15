import { useState, useEffect, useMemo } from "react";
import { getRouteObject, getTripDistance } from "pages/NewRide/helpers";
import { MAP_FIXED_COORD } from "AppConfig";

export const useDirections = (
  rideType: any,
  locationValue: any,
  setError: any
) => {
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [tripDistance, setTripDistance] = useState<any>(0);

  const fixedCordinates = useMemo(
    () => new google.maps.LatLng(MAP_FIXED_COORD.LAT, MAP_FIXED_COORD.LNG),
    []
  );

  useEffect(() => {
    const fetchDirections = async () => {
      const minRouteObject = await getRouteObject(
        rideType,
        locationValue,
        fixedCordinates
      );
      const distance = getTripDistance(minRouteObject);
      setDirectionsResponse(minRouteObject);
      setTripDistance(distance);
    };
    if (locationValue) {
      fetchDirections();
      setError(false);
    }
  }, [locationValue, rideType, fixedCordinates, setError]);

  return { directionsResponse, tripDistance };
};

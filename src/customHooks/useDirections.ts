import { COORDINATES } from "../appConstants";
import { useState, useEffect, useMemo } from "react";
import { getRouteObject, getTripDistance } from "pages/NewRide/helpers";

export const useDirections = (rideType: any, locationValue: any) => {
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [tripDistance, setTripDistance] = useState<any>(0);

  const airportCordinates = useMemo(
    () => new google.maps.LatLng(COORDINATES.KIA.LAT, COORDINATES.KIA.LNG),
    []
  );

  useEffect(() => {
    const fetchDirections = async () => {
      const minRouteObject = await getRouteObject(
        rideType,
        locationValue,
        airportCordinates
      );
      const distance = getTripDistance(minRouteObject);
      setDirectionsResponse(minRouteObject);
      setTripDistance(distance);
    };
    locationValue && fetchDirections();
  }, [locationValue, rideType, airportCordinates]);

  return { directionsResponse, tripDistance };
};

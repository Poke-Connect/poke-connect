/* eslint-disable no-undef */
export const createRoute = async (originValue: any, destinationValue: any) => {
  if (originValue === "" || destinationValue === "") {
    return;
  }
  const directionsService = new google.maps.DirectionsService();

  const results = await directionsService.route({
    origin: originValue,
    destination: destinationValue,
    travelMode: google.maps.TravelMode.DRIVING,
  });

  return results;
};

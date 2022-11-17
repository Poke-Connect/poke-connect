export const createRoute = async (originValue, destinationValue) => {
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

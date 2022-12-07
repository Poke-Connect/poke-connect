/**
 * Calculates the haversine distance between point A, and B.
 * @param {number[]} latlngA [lat, lng] point A
 * @param {number[]} latlngB [lat, lng] point B
 */

const RADIUS_OF_EARTH_IN_KM = 6371;

const getHaversineDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  const finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  return finalDistance;
};

/**
 * Calculates the haversine distance between point A, and B.
 * @param {number[]} latlngA [lat, lng] point A
 * @param {number[]} latlngB [lat, lng] point B
 * @param {number} r acceptable distance in km.
 */

//We will use this before calculating proper distance between them by google apis
export const getIsAcceptablePoint = ([lat1, lon1], [lat2, lon2], r) => {
  const haversineDistance = getHaversineDistance([lat1, lon1], [lat2, lon2]);
  if (haversineDistance <= r) {
    return true;
  }
  return false;
};
//We will sort the arr of returned points and will give top 5 (closest acc to haversine dist)
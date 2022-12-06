export const capitaliseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createLocationString = (location) => {
  if (!location) {
    return "";
  }
  const locationArr = location.split(",");
  const establishment = locationArr[0];
  const subLocality = locationArr[1];
  const locationStr = `${establishment}, ${subLocality}`;
  return locationStr;
};

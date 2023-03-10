export const capitaliseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitaliseName = (name) => {
  const nameArr = name.split(" ");
  const finalNameArr = [];
  nameArr.forEach((elem) => {
    const nameCap = capitaliseFirstLetter(elem);
    finalNameArr.push(nameCap);
  });
  return finalNameArr.join(" ");
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

export const getDistanceInKm = (distance) => {
  return (Number(distance) / 1000).toFixed(2);
};

export const getFirstName = (displayName) => {
  const nameArr = displayName.split(" ");
  const firstName = capitaliseFirstLetter(nameArr[0]);
  return firstName;
};

export const getObjectLength = (obj) => {
  return obj ? Object.keys(obj).length : 0;
};

export const checkLocation = (pathname, toCheck) => {
  if (pathname.split("/")[1] === toCheck) {
    return true;
  } else {
    return false;
  }
};

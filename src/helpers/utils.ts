export const capitaliseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitaliseName = (name: string) => {
  const nameArr = name.split(" ");
  const finalNameArr: string[] = [];
  nameArr.forEach((elem) => {
    const nameCap = capitaliseFirstLetter(elem);
    finalNameArr.push(nameCap);
  });
  return finalNameArr.join(" ");
};

export const createLocationString = (location: string) => {
  if (!location) {
    return "";
  }
  const locationArr = location.split(",");
  const establishment = locationArr[0];
  const subLocality = locationArr[1];
  const locationStr = `${establishment}, ${subLocality}`;
  return locationStr;
};

export const getFirstName = (displayName: string) => {
  const nameArr = displayName.split(" ");
  const firstName = capitaliseFirstLetter(nameArr[0]);
  return firstName;
};

export const getObjectLength = (obj: Object) => {
  return obj ? Object.keys(obj).length : 0;
};

export const checkLocation = (pathname: string, toCheck: string) => {
  if (pathname.split("/")[1] === toCheck) {
    return true;
  } else {
    return false;
  }
};

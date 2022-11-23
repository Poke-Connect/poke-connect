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

export const createUserObj = (user) => {
  const userObj = {};
  userObj["id"] = user.uid;
  userObj["displayName"] = user.displayName;
  userObj["photoURL"] = user.photoURL;
  userObj["email"] = user.email;
  return userObj;
};

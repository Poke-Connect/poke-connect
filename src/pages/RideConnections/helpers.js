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

export const createConnectedConnectionsList = (rideConnections) => {
  const connectionsList = [];
  Object.keys(rideConnections).forEach((rideId) => {
    connectionsList.push(createConnectionObj(rideConnections[rideId]));
  });
  return connectionsList;
};

export const createConnectionObj = (connectionData) => {
  const connectionObj = {};
  connectionObj["id"] = connectionData.id;
  connectionObj["displayName"] = connectionData.userInfo.displayName;
  connectionObj["photoURL"] = connectionData.userInfo.photoURL;
  connectionObj["email"] = connectionData.userInfo.email;
  connectionObj["location"] = connectionData.rideInfo.location;
  connectionObj["timeDiff"] = connectionData.matchInfo.extraTime;
  connectionObj["timeStampRide"] = connectionData.rideInfo.timeStampRide;

  return connectionObj;
};

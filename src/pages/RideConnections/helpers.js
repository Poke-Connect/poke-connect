export const createUserObj = (user) => {
  const userObj = {};
  userObj["userId"] = user._id;
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
  connectionObj["uid"] = connectionData.userInfo.uid;
  connectionObj["displayName"] = connectionData.userInfo.displayName;
  connectionObj["photoURL"] = connectionData.userInfo.photoURL;
  connectionObj["email"] = connectionData.userInfo.email;
  connectionObj["location"] = connectionData.rideInfo.location;
  connectionObj["timeDiff"] = connectionData.matchInfo.extraTime;
  connectionObj["distDiff"] = connectionData.matchInfo.extraDist;
  connectionObj["timeStampRide"] = connectionData.rideInfo.timeStampRide;

  return connectionObj;
};

export const getConnectedCount = (res) => {
  if (!res || !res.connectedConnections) {
    return 0;
  }
  return res.connectedConnections ? res.connectedConnections.length : 0;
};

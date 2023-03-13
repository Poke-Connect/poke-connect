export const createUserObj = (user: any) => {
  const userObj = {};
  userObj["_id"] = user?.userId;
  userObj["displayName"] = user?.displayName;
  userObj["photoURL"] = user?.photoURL;
  userObj["email"] = user?.email;
  return userObj;
};

export const getConnectedCount = (res: any) => {
  if (!res || !res.connectedConnections) {
    return 0;
  }
  return res.connectedConnections ? res.connectedConnections.length : 0;
};

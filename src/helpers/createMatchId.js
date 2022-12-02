export const createMatchId = (uid1, uid2) => {
  if (uid1 > uid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
};

export const createConnectionId = (uid1, uid2, rideId1, rideId2) => {
  const cid1 = uid1 + rideId1;
  const cid2 = uid2 + rideId2;
  if (cid1 > cid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
};

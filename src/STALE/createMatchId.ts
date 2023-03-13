//STALE_FILE

export const createMatchId = (uid1: any, uid2: any) => {
  if (uid1 > uid2) {
    return uid1 + uid2;
  } else {
    return uid2 + uid1;
  }
};

export const createConnectionId = (
  uid1: any,
  uid2: any,
  rideId1: any,
  rideId2: any
) => {
  const cid1 = uid1 + rideId1;
  const cid2 = uid2 + rideId2;
  if (cid1 > cid2) {
    return cid1 + cid2;
  } else {
    return cid2 + cid1;
  }
};

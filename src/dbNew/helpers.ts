export const createMatchData = (
  matchId: string,
  userData: any,
  rideData: any,
  extraTime: any,
  extraDist: any
) => {
  const matchData = {
    id: matchId,
    date: rideData.date,
    userInfo: {
      userId: userData._id,
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      email: userData.email,
    },
    rideInfo: {
      rideId: rideData.rideId,
      location: rideData.location,
      timeStampRide: rideData.timeStampRide,
    },
    matchInfo: {
      extraTime: extraTime,
      extraDist: extraDist,
    },
  };
  return matchData;
};

export const createRideConnectionData = (
  user: any,
  ride: any,
  matchInfo: any
) => {
  const connectionObject = {
    user: {
      userId: user._id,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    },
    ride: {
      rideId: ride._id,
      location: ride.location,
      timeStampRide: ride.timeStampRide,
    },
    matchInfo: matchInfo,
  };
  console.log("connection object test", connectionObject);
  return connectionObject;
};

export const createNewConnectionData = (user1: any, user2: any) => {
  const connectionObject = {
    members: [user1, user2],
  };
  return connectionObject;
};

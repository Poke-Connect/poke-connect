export const createRideConnectionData = (
  user: any,
  ride: any,
  matchInfo: any,
  connectionId: any
) => {
  const connectionObject = {
    connectionId: connectionId,
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
  return connectionObject;
};

export const createNewConnectionData = (user1Id: string, user2Id: string) => {
  const connectionObject = {
    members: [user1Id, user2Id],
  };
  return connectionObject;
};

const getConnectedRidesIds = (connectedConnections) => {
  const rideIds = [];
  if (!connectedConnections) {
    return rideIds;
  }
  connectedConnections.map((connection) => rideIds.push(connection.ride._id));

  return rideIds;
};

// const getNotConnectedRides = (filteredRides, alreadyConnected) => {
//   const filteredTypeRides = filteredRides.filter(
//     (rideId) => !alreadyConnected.includes(rideId)
//   );

//   return filteredTypeRides;
// };

export const getNotConnectedRides = (
  otherRidesFetched,
  connectedConnections
) => {
  const filteredRides = [];

  const connectedRidesIds = getConnectedRidesIds(connectedConnections);

  const filteredTypeRides = otherRidesFetched.filter(
    (rideId) => !alreadyConnected.includes(rideId)
  );
};

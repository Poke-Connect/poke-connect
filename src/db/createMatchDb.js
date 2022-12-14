import { getDatabase, ref, set } from "firebase/database";
import { createConnectionId } from "../helpers/createMatchId";

// "/matches/userid/rideid/matchid"
export const createMatchDb = (
  userData1,
  userData2,
  rideData1,
  rideData2,
  extraTime,
  extraDist
) => {
  const db = getDatabase();

  const matchId = createConnectionId(
    userData1.uid,
    userData2.uid,
    rideData1.rideId,
    rideData2.rideId
  );
  const dbRefUser1 = ref(
    db,
    `ridesConnections/${userData1.uid}/${rideData1.rideId}/${matchId}`
  );
  const dbRefUser2 = ref(
    db,
    `ridesConnections/${userData2.uid}/${rideData2.rideId}/${matchId}`
  );

  const matchData1 = {
    id: matchId,
    date: rideData1.date,
    userInfo: {
      uid: userData2.uid,
      displayName: userData2.displayName,
      photoURL: userData2.photoURL,
      email: userData2.email,
    },
    rideInfo: {
      rideId: rideData2.rideId,
      location: rideData2.location,
      timeStampRide: rideData2.timeStampRide,
    },
    matchInfo: {
      extraTime: extraTime,
      extraDist: extraDist,
    },
  };

  const matchData2 = {
    id: matchId,
    date: rideData2.date,
    userInfo: {
      uid: userData1.uid,
      displayName: userData1.displayName,
      photoURL: userData1.photoURL,
      email: userData1.email,
    },
    rideInfo: {
      rideId: rideData1.rideId,
      location: rideData1.location,
      timeStampRide: rideData1.timeStampRide,
    },
    matchInfo: {
      extraTime: extraTime,
      extraDist: extraDist,
    },
  };

  set(dbRefUser1, matchData1);
  set(dbRefUser2, matchData2);
};

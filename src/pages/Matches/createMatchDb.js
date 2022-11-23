import { getDatabase, ref, set } from "firebase/database";
import { createMatchId } from "../../helpers/createMatchId";

// "/matches/userid/rideid/matchid"
export const createMatchDb = (
  userData1,
  userData2,
  rideData1,
  rideData2,
  extraTime
) => {
  const db = getDatabase();
  const matchId = createMatchId(rideData1.rideId, rideData2.rideId);
  const dbRefUser1 = ref(
    db,
    `matches/${userData1.id}/${rideData1.rideId}/${matchId}`
  );
  const dbRefUser2 = ref(
    db,
    `matches/${userData2.id}/${rideData2.rideId}/${matchId}`
  );

  const matchData1 = {
    id: matchId,
    date: rideData1.date,
    userInfo: {
      id: userData2.id,
      displayName: userData2.displayName,
      photoURL: userData2.photoURL,
      email: userData2.email,
    },
    rideInfo: {
      rideId: rideData2.rideId,
      location: rideData2.location,
    },
    matchInfo: {
      extraTime: extraTime,
    },
  };

  const matchData2 = {
    id: matchId,
    date: rideData2.date,
    userInfo: {
      id: userData1.id,
      displayName: userData1.displayName,
      photoURL: userData1.photoURL,
      email: userData1.email,
    },
    rideInfo: {
      rideId: rideData1.rideId,
      location: rideData1.location,
    },
    matchInfo: {
      extraTime: extraTime,
    },
  };

  set(dbRefUser1, matchData1);
  set(dbRefUser2, matchData2);
};

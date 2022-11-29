import { getDatabase, ref, set } from "firebase/database";
import { createMatchId } from "../../../helpers/createMatchId";

// "/matches/userid/connectionId"
export const createConnectionDb = (
  userData1,
  userData2,
  rideData1,
  rideData2,
  extraTime
) => {
  const db = getDatabase();
  const connectionId = createMatchId(userData1.id, userData2.id);
  const dbRefUser1 = ref(
    db,
    `usersConnections/${userData1.id}/${connectionId}`
  );
  const dbRefUser2 = ref(
    db,
    `usersConnections/${userData2.id}/${connectionId}`
  );

  const connectionData1 = {
    id: connectionId,
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

  const connectionData2 = {
    id: connectionId,
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

  set(dbRefUser1, connectionData1);
  set(dbRefUser2, connectionData2);
};

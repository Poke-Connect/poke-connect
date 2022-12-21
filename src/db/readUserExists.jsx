import { getDatabase, ref, child, get } from "firebase/database";

export const readUserExists = async (uid) => {
  const dbRef = ref(getDatabase());

  const res = await get(child(dbRef, `users/${uid}`));
  if (res.exists()) {
    return true;
  } else {
    return false;
  }
};

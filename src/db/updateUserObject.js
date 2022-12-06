import { getDatabase, ref, set } from "firebase/database";

// "/users/uid"
export const updateUserObj = (userData, uid, email, photoURL) => {
  if (!uid) {
    return;
  }
  const db = getDatabase();
  const userDbRef = ref(db, `users/${uid}`);
  const displayName = `${userData.firstName} ${userData.lastName}`;
  const userObj = {
    ...userData,
    uid,
    displayName,
    email,
    photoURL,
  };
  set(userDbRef, userObj);
};

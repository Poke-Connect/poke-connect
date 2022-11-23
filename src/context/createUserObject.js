import { getDatabase, ref, set } from "firebase/database";

export const createUserObject = (res) => {
  const db = getDatabase();
  const dbRef = ref(db, "users/" + res.user.uid);
  const userData = {
    id: res.user.uid,
    displayName: res.user.displayName,
    email: res.user.email,
    photoURL: res.user.photoURL,
    phoneNumber: res.user.phoneNumber,
  };

  set(dbRef, userData);
};

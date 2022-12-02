import { getDatabase, ref, set } from "firebase/database";
import { getNameObject } from "../helpers/getNameObject";

export const createUserObject = (res) => {
  const db = getDatabase();
  const dbRef = ref(db, "users/" + res.user.uid);
  const name = getNameObject(res.user.displayName);
  const userData = {
    uid: res.user.uid,
    displayName: res.user.displayName,
    firstName: name[0],
    lastName: name[1],
    email: res.user.email,
    photoURL: res.user.photoURL,
    phoneNumber: res.user.phoneNumber,
  };

  set(dbRef, userData);
};

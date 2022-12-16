import { getDatabase, ref, child, get } from "firebase/database";

export const readUserExists = async (uid) => {
  const dbRef = ref(getDatabase());
  let userExists;

  await get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        userExists = true;
      } else {
        userExists = false;
      }
    })
    .catch((error) => {
      console.error(error);
      userExists = false;
    });
  return userExists;
};

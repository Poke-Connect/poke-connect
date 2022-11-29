import { getDatabase, ref, set } from "firebase/database";

// "/users/userid"
export const updateUserObj = (userData, id, email, photoURL) => {
  const db = getDatabase();
  const userDbRef = ref(db, `users/${id}`);
  const displayName = `${userData.firstName} ${userData.lastName}`;
  const userObj = {
    ...userData,
    id,
    displayName,
    email,
    photoURL,
  };
  set(userDbRef, userObj);
};

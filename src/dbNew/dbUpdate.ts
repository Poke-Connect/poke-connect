import { updateUser } from "api/user";

export const updateProfile = async (
  userData: any,
  userId: string,
  email: string,
  photoURL: string
) => {
  if (!userId || !email) {
    return;
  }
  console.log("userId", userId);
  const displayName = `${userData.firstName} ${userData.lastName}`;
  const userObj = {
    ...userData,
    _id: userId,
    displayName,
    email,
    photoURL,
  };
  console.log("update data", userObj);

  const res = await updateUser(userId, userObj);
  console.log("updated object", res);
  return res;
};

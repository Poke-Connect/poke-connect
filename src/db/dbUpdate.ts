import { updateConnection } from "api/connection";
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
  const displayName = `${userData.firstName} ${userData.lastName}`;
  const userObj = {
    ...userData,
    _id: userId,
    displayName,
    email,
    photoURL,
  };
  const res = await updateUser(userId, userObj);
  return res;
};

export const updateConnectionData = async (
  connectionId: string,
  text: string,
  senderId: string
) => {
  if (!connectionId || !senderId) {
    return;
  }
  const lastMessageObj = { senderId, text, timestamp: Date.now() };
  const updatedAt = Date.now();

  const res = await updateConnection(connectionId, lastMessageObj, updatedAt);
  return res?.data;
};

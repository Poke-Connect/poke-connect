import { createUserObject } from "db/createUserObject";
import { addToUserChatsDb } from "db/firestore/dbWrites";

export const addNewUser = async (res) => {
  await createUserObject(res);
  await addToUserChatsDb(res.user.uid);
};

export const addCorruptUser = async (userExists, userChatDbExists, res) => {
  if (!userExists) {
    await createUserObject(res);
  }
  if (!userChatDbExists) {
    await addToUserChatsDb(res.user.uid);
  }
};

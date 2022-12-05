import { fireStoreDb } from "firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  getDoc,
  arrayUnion,
} from "firebase/firestore";
import { createConnectionId } from "helpers/createMatchId";

//collection = 'users' ; node = 'uid' ; document = {name, email}

export const addItem = async (collection, node, document) => {
  await setDoc(doc(fireStoreDb, collection, node), document);
};

export const updateItem = async (collection, node, document) => {
  await updateDoc(doc(fireStoreDb, collection, node), document);
};

export const addUserChatsDb = async (userId) => {
  const collection = "userChats";
  const node = userId;
  const document = {};
  try {
    const res = await getDoc(doc(fireStoreDb, collection, node));
    if (!res.exists()) {
      await addItem(collection, node, document);
    } else {
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

//combinedId == u1+u2+r1+r2
export const createNewUsersChats = async (combinedId) => {
  try {
    const res = await getDoc(doc(fireStoreDb, "chats", combinedId));
    if (!res.exists()) {
      await addItem("chats", combinedId, { messages: [] });
    }
  } catch (e) {
    console.log(e);
  }
};

//combinedId == u1+u2+r1+r2
const createUserChatDocument = (combinedId, userData, rideData, extraTime) => {
  const document = {
    [combinedId + ".userInfo"]: {
      uid: userData.uid,
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      email: userData.email,
    },
    [combinedId + ".date"]: serverTimestamp(),
    [combinedId + ".rideInfo"]: {
      rideId: rideData.rideId,
      location: rideData.location,
      time: rideData.time,
    },
    [combinedId + ".matchInfo"]: {
      extraTime: extraTime,
    },
  };
  return document;
};

export const updateUserChats = async (
  user1,
  user2,
  ride1,
  ride2,
  extraTime
) => {
  const combinedId = createConnectionId(
    user1.uid,
    user2.uid,
    ride1.rideId,
    ride2.rideId
  );
  const document1 = createUserChatDocument(combinedId, user2, ride2, extraTime);
  const document2 = createUserChatDocument(combinedId, user1, ride1, extraTime);
  await updateItem("userChats", user1.uid, document1);
  await updateItem("userChats", user2.uid, document2);
};

export const updateMessagesDb = async (chatId, message) => {
  const document = {
    messages: arrayUnion({
      message,
    }),
  };
  await updateItem("chats", chatId, document);
};

export const updateDatesUserChats = async (uid1, uid2, chatId) => {
  const document = {
    [chatId + ".date"]: serverTimestamp(),
  };
  await updateItem("userChats", uid1, document);
  await updateItem("userChats", uid2, document);
};

export const addFeedbackDb = async (id, data) => {
  try {
    await addItem("feedback", id, data);
  } catch (e) {
    console.log(e);
  }
};

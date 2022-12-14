import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import TileDetails from "./TileDetails";
import { createUserObj } from "../helpers";
import { createMatchDb } from "db/createMatchDb";
import { UserAuth } from "context/AuthContext";
import { updateUserChats, createNewUsersChats } from "db/firestore/dbWrites";
import { useNavigate } from "react-router-dom";
import { createConnectionId } from "helpers/createMatchId";
import { UserChat } from "context/ChatContext";

const ConnectionTile = (props) => {
  const { matchDetails, timeDiff, userRide, distDiff } = props;
  const navigate = useNavigate();

  const { dispatch } = UserChat();

  const { userId: creatorId, rideId, location, timeStampRide } = matchDetails;

  const [creatorObj, setCreatorObj] = useState(null);

  const db = getDatabase();
  const creatorRef = ref(db, "users/" + creatorId);

  useEffect(() => {
    onValue(creatorRef, (snapshot) => {
      const data = snapshot.val();
      setCreatorObj(data);
    });
  }, []);

  if (!creatorId || !rideId) {
    return null;
  }

  const { user } = UserAuth();
  const userObj = createUserObj(user);
  const combinedId = createConnectionId(
    user.uid,
    creatorId,
    userRide.rideId,
    rideId
  );

  const onClickHandler = async () => {
    if (!userObj || !creatorObj) {
      return;
    }
    try {
      await createMatchDb(
        userObj,
        creatorObj,
        userRide,
        matchDetails,
        timeDiff,
        distDiff
      );
      await updateUserChats(
        userObj,
        creatorObj,
        userRide,
        matchDetails,
        timeDiff,
        distDiff
      );
      await createNewUsersChats(combinedId, user.uid, creatorId);

      dispatch({
        type: "CHANGE_USER_CHAT",
        payload: { user: creatorObj, chatId: combinedId },
      });

      navigate(`/chat/${combinedId}`);
    } catch (error) {
      console.log("Connection Failed", error);
    }
  };

  return (
    <TileDetails
      displayName={creatorObj?.displayName}
      photoURL={creatorObj?.photoURL}
      location={location}
      timeDiff={timeDiff}
      distDiff={distDiff}
      timeStampRide={timeStampRide}
      onClickHandler={onClickHandler}
    />
  );
};

export default ConnectionTile;

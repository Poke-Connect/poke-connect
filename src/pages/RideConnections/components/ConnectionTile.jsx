import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import TileDetails from "./TileDetails";
import { createUserObj } from "../helpers";
import { createMatchDb } from "db/createMatchDb";
import { createConnectionDb } from "db/createConnectionDb";
import { UserAuth } from "context/AuthContext";

const ConnectionTile = (props) => {
  const { matchDetails, timeDiff, userRide } = props;

  const { userId, rideId, location, timeStampRide } = matchDetails;

  const [creatorObj, setCreatorObj] = useState(null);

  const db = getDatabase();
  const creatorRef = ref(db, "users/" + userId);

  useEffect(() => {
    onValue(creatorRef, (snapshot) => {
      const data = snapshot.val();
      setCreatorObj(data);
    });
  }, []);

  if (!userId || !rideId) {
    return null;
  }

  const { user } = UserAuth();
  const userObj = createUserObj(user);

  const onClickHandler = () => {
    if (!userObj || !creatorObj) {
      return;
    }
    //Save match in collection of both user --> matchid: combinedId
    try {
      createMatchDb(userObj, creatorObj, userRide, matchDetails, timeDiff);
      createConnectionDb(userObj, creatorObj, userRide, matchDetails, timeDiff);
      alert("Connection Added Succesfully");
    } catch (error) {
      alert("Connection Failed");
    }
  };

  return (
    <TileDetails
      displayName={creatorObj?.displayName}
      photoURL={creatorObj?.photoURL}
      location={location}
      timeDiff={timeDiff}
      onClickHandler={onClickHandler}
      timeStampRide={timeStampRide}
    />
  );
};

export default ConnectionTile;

import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import TileDetails from "./TileDetails";
import { UserAuth } from "../../../context/AuthContext";
import { createUserObj } from "../helpers";
import { createMatchDb } from "../createMatchDb";

const MatchTile = (props) => {
  const { matchDetails, timeDiff, userRide } = props;

  const { creatorId, rideId, location, time } = matchDetails;

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

  const onClickHandler = () => {
    if (!userObj || !creatorObj) {
      return;
    }
    //Save match in collection of both user --> matchid: combinedId
    createMatchDb(userObj, creatorObj, userRide, matchDetails, timeDiff);
  };

  return (
    <div
      id="clickContainer"
      className="flex flex-row py-8 px-2 justify-between items-center border-b border-lightGreen gap-3"
      onClick={onClickHandler}
    >
      <TileDetails
        displayName={creatorObj?.displayName}
        photoURL={creatorObj?.photoURL}
        location={location}
        timeDiff={timeDiff}
        time={time}
      />
    </div>
  );
};

export default MatchTile;

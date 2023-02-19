import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import TileDetails from "./TileDetails";
import { createUserObj } from "../helpers";
import { createMatchDb } from "db/createMatchDb";
import { UserAuth } from "context/AuthProvider";
import { updateUserChats, createNewUsersChats } from "db/firestore/dbWrites";
import { useNavigate } from "react-router-dom";
import { createMatchId } from "helpers/createMatchId";
import { UserChat } from "context/ChatContext";
import { toast } from "react-toastify";
import { toastStrings } from "strings/toastStrings";
import { createRideConnection, createNewConnection } from "dbNew/dbWrites";

const AvailableConnectionTile = (props) => {
  const { rideDetails: otherRide, myRide, timeDiff, distDiff } = props;
  const navigate = useNavigate();

  const { user } = UserAuth();

  const { user: otherUser, _id: rideId, location, timeStampRide } = otherRide;

  if (!otherUser || !otherRide) {
    return null;
  }

  const onClickHandler = async () => {
    if (!user || !otherUser) {
      return;
    }
    const toastId = toast.loading(toastStrings.CREATING_CONNECTION);

    try {
      await createRideConnection(
        user,
        otherUser,
        myRide,
        otherRide,
        distDiff,
        timeDiff
      );

      toast.update(toastId, {
        render: toastStrings.MATCH_CREATION_SUCCESS,
        type: "success",
        isLoading: false,
        autoClose: 100,
        closeButton: true,
      });
      //TODO: Later, we would also need to save connected ride info
      const connectionId = await createNewConnection(user, otherUser);
      // navigate(`/chat/${connectionId}`);
    } catch (error) {
      toast.error(toastStrings.ERROR);
      console.log("Connection Failed", error);
    }
  };

  return (
    <TileDetails
      displayName={otherUser?.displayName}
      photoURL={otherUser?.photoURL}
      uid={otherUser?._id}
      location={location}
      timeDiff={timeDiff}
      distDiff={distDiff}
      timeStampRide={timeStampRide}
      onClickHandler={onClickHandler}
    />
  );
};

export default AvailableConnectionTile;

// const onClickHandler = async () => {
//   if (!userObj || !creatorObj) {
//     return;
//   }
//   const toastId = toast.loading(toastStrings.CREATING_CONNECTION);

//   try {
//     await createMatchDb(
//       userObj,
//       creatorObj,
//       userRide,
//       matchDetails,
//       timeDiff,
//       distDiff
//     );
//     await updateUserChats(
//       userObj,
//       creatorObj,
//       userRide,
//       matchDetails,
//       timeDiff,
//       distDiff
//     );
//     await createNewUsersChats(combinedId, user.uid, creatorId);
//     toast.update(toastId, {
//       render: toastStrings.MATCH_CREATION_SUCCESS,
//       type: "success",
//       isLoading: false,
//       autoClose: 100,
//       closeButton: true,
//     });
//     dispatch({
//       type: "CHANGE_USER_CHAT",
//       payload: { user: creatorObj, chatId: combinedId },
//     });

//     navigate(`/chat/${combinedId}`);
//   } catch (error) {
//     toast.error(toastStrings.ERROR);
//     console.log("Connection Failed", error);
//   }
// };

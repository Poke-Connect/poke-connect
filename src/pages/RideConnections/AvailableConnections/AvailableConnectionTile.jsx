import { UserAuth } from "context/AuthProvider";
import { UserChat } from "context/ChatContext";
import { Socket } from "context/SocketContext";
import { createNewConnection, createRideConnection } from "dbNew/dbWrites";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStrings } from "strings/toastStrings";
import TileDetails from "../components/TileDetails";

const AvailableConnectionTile = (props) => {
  const { rideDetails: otherRide, myRide, timeDiff, distDiff } = props;
  const navigate = useNavigate();

  const { user } = UserAuth();
  const { dispatch } = UserChat();
  const socket = Socket();

  const { user: otherUser, location, timeStampRide } = otherRide;

  if (!otherUser || !otherRide) {
    return null;
  }

  const onClickHandler = async () => {
    if (!user || !otherUser) {
      return;
    }
    const toastId = toast.loading(toastStrings.CREATING_CONNECTION);

    //Add Socket event here

    try {
      const connectionId = await createNewConnection(user, otherUser);
      if (!connectionId) {
        toast.error(toastStrings.ERROR);
        return;
      }
      await createRideConnection(
        user,
        otherUser,
        myRide,
        otherRide,
        distDiff,
        timeDiff,
        connectionId
      );

      socket.emit(
        "add-connection",
        { connectionId: connectionId },
        otherUser._id
      );

      toast.update(toastId, {
        render: toastStrings.MATCH_CREATION_SUCCESS,
        type: "success",
        isLoading: false,
        autoClose: 100,
        closeButton: true,
      });
      dispatch({
        type: "CHANGE_USER_CHAT",
        payload: { user: otherUser, chatId: connectionId },
      });
      navigate(`/chat/${connectionId}`);
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

//

//     navigate(`/chat/${combinedId}`);
//   } catch (error) {
//     toast.error(toastStrings.ERROR);
//     console.log("Connection Failed", error);
//   }
// };

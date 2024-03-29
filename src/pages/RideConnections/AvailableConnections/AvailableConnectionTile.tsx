import { useSocket } from "context/SocketContext";
import { createNewConnection, createRideConnection } from "db/dbWrites";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserObj } from "../helpers";
import { TOAST_STRINGS } from "appConstants";
import { useAppDispatch, useAppSelector } from "hooks";
import { TileDetails } from "../components";
import { changeUserChat } from "features/chat/chatSlice";

interface IProps {
  rideDetails: any;
  myRide: any;
  extraTime: any;
  extraDist: any;
}

const AvailableConnectionTile: FC<IProps> = (props) => {
  const { rideDetails: otherRide, myRide, extraTime, extraDist } = props;
  const { CREATING_CONNECTION, ERROR, MATCH_CREATION_SUCCESS } = TOAST_STRINGS;
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);

  const socket = useSocket();
  const dispatch = useAppDispatch();

  const { user: otherUser, location, timeStampRide } = otherRide;

  if (!otherUser || !otherRide) {
    return null;
  }

  const onClickHandler = async () => {
    if (!user || !otherUser) {
      return;
    }
    const toastId = toast.loading(CREATING_CONNECTION);
    try {
      const connectionId = await createNewConnection(user, otherUser);
      if (!connectionId) {
        toast.error(ERROR);
        return;
      }
      await createRideConnection(
        user,
        otherUser,
        myRide,
        otherRide,
        extraDist,
        extraTime,
        connectionId
      );
      socket?.emit(
        "add-connection",
        { connectionId: connectionId },
        otherUser._id
      );
      toast.update(toastId, {
        render: MATCH_CREATION_SUCCESS,
        type: "success",
        isLoading: false,
        autoClose: 60,
        closeButton: true,
      });
      dispatch(changeUserChat({ chatId: connectionId, chatUser: otherUser }));
      navigate(`/chat/${connectionId}`);
    } catch (error) {
      toast.error(ERROR);
      console.log("Connection Failed", error);
    }
  };

  const userDetails = createUserObj(otherUser);
  const matchDetails = { extraTime, extraDist };
  const rideDetails = { timeStampRide, location };

  return (
    <TileDetails
      userDetails={userDetails}
      matchDetails={matchDetails}
      rideDetails={rideDetails}
      onClickHandler={onClickHandler}
    />
  );
};

export default AvailableConnectionTile;

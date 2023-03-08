import React from "react";
import { useNavigate } from "react-router-dom";
import TileDetails from "../components/TileDetails";
import { createUserObj } from "../helpers";
import { UserChat } from "context/ChatContext";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "constants/emptyStrings";

const ConnectedConnectionsList = (props) => {
  const { connectionsData } = props;
  const { dispatch } = UserChat();
  const navigate = useNavigate();

  if (!connectionsData || connectionsData.length === 0) {
    return <EmptyItem text={emptyStrings.CONNECTED_CONNECTIONS} />;
  }

  const onClickHandler = (data) => {
    if (!data.connectionId) {
      return;
    }
    const userObj = createUserObj(data?.user);
    try {
      dispatch({
        type: "CHANGE_USER_CHAT",
        payload: { user: userObj, chatId: data.connectionId },
      });
      navigate(`/chat/${data.connectionId}`);
    } catch (error) {
      console.log("Connection Failed", error);
    }
  };

  return (
    <>
      {connectionsData.map((data) => (
        <TileDetails
          key={data._id}
          displayName={data.user.displayName}
          photoURL={data.user.photoURL}
          location={data.ride.location}
          timeDiff={data.matchInfo.extraTime}
          distDiff={data.matchInfo.extraDist}
          timeStampRide={data.timeStampRide}
          userId={data.user.userId}
          onClickHandler={() => onClickHandler(data)}
        />
      ))}
    </>
  );
};

export default ConnectedConnectionsList;

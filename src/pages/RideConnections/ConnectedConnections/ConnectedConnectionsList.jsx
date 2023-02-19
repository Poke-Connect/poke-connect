import React from "react";
import { useNavigate } from "react-router-dom";
import TileDetails from "../components/TileDetails";
import { createUserObj } from "../helpers";
import { UserChat } from "context/ChatContext";

const ConnectedConnectionsList = (props) => {
  const { connectionsData } = props;
  const { dispatch } = UserChat();
  const navigate = useNavigate();

  const onClickHandler = (data) => {
    // const userObj = createUserObj(data);
    // try {
    //   dispatch({
    //     type: "CHANGE_USER_CHAT",
    //     payload: { user: userObj, chatId: data.id },
    //   });
    //   navigate(`/chat/${data.id}`);
    // } catch (error) {
    //   console.log("Connection Failed", error);
    // }
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
          uid={data.user.userId}
          onClickHandler={() => onClickHandler(data)}
        />
      ))}
    </>
  );
};

export default ConnectedConnectionsList;

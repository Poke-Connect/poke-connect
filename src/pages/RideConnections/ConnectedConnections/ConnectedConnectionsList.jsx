import React from "react";
import { useNavigate } from "react-router-dom";
import TileDetails from "../components/TileDetails";
import { createUserObj } from "../helpers";
import { UserChat } from "context/ChatContext";

const ConnectedConnectionsList = (props) => {
  const { connectionsdata } = props;

  const { dispatch } = UserChat();
  const navigate = useNavigate();

  const onClickHandler = (data) => {
    const userObj = createUserObj(data);

    try {
      dispatch({
        type: "CHANGE_USER_CHAT",
        payload: { user: userObj, chatId: data.id },
      });

      navigate(`/chat/${data.id}`);
    } catch (error) {
      console.log("Connection Failed", error);
    }
  };

  return (
    <>
      {connectionsdata.map((data) => (
        <TileDetails
          key={data.id}
          displayName={data.displayName}
          photoURL={data.photoURL}
          location={data.location}
          timeDiff={data.timeDiff}
          distDiff={data.distDiff}
          timeStampRide={data.timeStampRide}
          onClickHandler={() => onClickHandler(data)}
        />
      ))}
    </>
  );
};

export default ConnectedConnectionsList;

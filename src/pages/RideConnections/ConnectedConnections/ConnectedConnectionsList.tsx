import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { createUserObj } from "../helpers";
import { UserChat } from "context/ChatContext";
import EmptyItem from "components/UI/EmptyItem";
import { EMPTY_STRINGS } from "appConstants";
import { TileDetails } from "../components";

interface IProps {
  connectionsData: any;
}

const ConnectedConnectionsList: FC<IProps> = (props) => {
  const { connectionsData } = props;
  const { dispatch } = UserChat();
  const navigate = useNavigate();

  if (!connectionsData || connectionsData.length === 0) {
    return <EmptyItem text={EMPTY_STRINGS.CONNECTED_CONNECTIONS} />;
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
      {connectionsData.map((data: any) => {
        const userDetails = createUserObj(data.user);
        const matchDetails = data.matchInfo;
        const rideDetails = {
          timeStampRide: data.timeStampRide,
          location: data.ride.location,
        };
        return (
          <TileDetails
            key={data._id}
            userDetails={userDetails}
            matchDetails={matchDetails}
            rideDetails={rideDetails}
            onClickHandler={() => onClickHandler(data)}
          />
        );
      })}
    </>
  );
};

export default ConnectedConnectionsList;

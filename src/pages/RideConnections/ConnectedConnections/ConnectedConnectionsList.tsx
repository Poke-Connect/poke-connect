import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { createUserObj } from "../helpers";
import { TileDetails } from "../components";
import EmptyConnectedConnection from "../components/EmptyConnectedConnection";
import { DateTimeElement } from "containers";
import { changeUserChat } from "features/chat/chatSlice";
import { useAppDispatch } from "hooks";

interface IProps {
  connectionsData: any;
  myRide: any;
}

const ConnectedConnectionsList: FC<IProps> = (props) => {
  const { connectionsData, myRide } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!connectionsData || connectionsData.length === 0) {
    return <EmptyConnectedConnection />;
  }

  const onClickHandler = (data) => {
    if (!data.connectionId) {
      return;
    }
    const userObj = createUserObj(data?.user);
    try {
      dispatch(
        changeUserChat({ chatId: data.connectionId, chatUser: userObj })
      );
      navigate(`/chat/${data.connectionId}`);
    } catch (error) {
      console.log("Connection Failed", error);
    }
  };

  return (
    <div className="mt-10">
      <DateTimeElement
        date={myRide.date}
        timeStampRide={myRide.timeStampRide}
      />
      <div>
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
      </div>
    </div>
  );
};

export default ConnectedConnectionsList;

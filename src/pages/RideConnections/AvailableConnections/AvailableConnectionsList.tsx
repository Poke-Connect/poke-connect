import React, { FC } from "react";
import DateTimeElement from "components/DateTimeElement";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "constants/emptyStrings";
import AvailableConnectionTile from "./AvailableConnectionTile";

interface IProps {
  myRide: any;
  availableConnections: any;
}

const AvailableConnectionsList: FC<IProps> = (props) => {
  const { myRide, availableConnections } = props;

  if (!myRide || !availableConnections) {
    return null;
  }

  const isEmpty = availableConnections.length === 0 ? true : false;

  if (isEmpty) {
    return <EmptyItem text={emptyStrings.AVAILABLE_CONNECTIONS} />;
  }

  return (
    <div className="mt-10">
      <DateTimeElement
        date={myRide.date}
        timeStampRide={myRide.timeStampRide}
      />
      <div>
        {availableConnections
          ? availableConnections.map((rideArr: any) => (
              <AvailableConnectionTile
                key={rideArr[0]._id}
                rideDetails={rideArr[0]}
                myRide={myRide}
                extraTime={rideArr[1]}
                extraDist={rideArr[2]}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AvailableConnectionsList;

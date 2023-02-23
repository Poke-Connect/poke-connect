import React from "react";
import DateTimeElement from "components/DateTimeElement";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "strings/emptyStrings";
import AvailableConnectionTile from "./AvailableConnectionTile";

const AvailableConnectionsList = (props) => {
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
          ? availableConnections.map((rideArr) => (
              <AvailableConnectionTile
                key={rideArr[0]._id}
                rideDetails={rideArr[0]}
                myRide={myRide}
                timeDiff={rideArr[1]}
                distDiff={rideArr[2]}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AvailableConnectionsList;

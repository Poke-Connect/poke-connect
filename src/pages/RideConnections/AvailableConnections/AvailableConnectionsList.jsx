import React, { useEffect, useState } from "react";
import { getPreFilteredRides } from "helpers/getPreFilteredRidesNew";
import { getFilteredRidesTime } from "helpers/getFilteredRidesTime";
import ConnectionTile from "../components/ConnectionTile";
import DateTimeElement from "components/DateTimeElement";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "strings/emptyStrings";

const AvailableConnectionsList = (props) => {
  const { myRide, allRides, alreadyConnected } = props;
  const [availableConnections, setAvailableConnections] = useState([]);

  const preFilteredRides = getPreFilteredRides(
    myRide,
    allRides,
    alreadyConnected
  );

  useEffect(() => {
    async function fetchMatches() {
      try {
        const filteredRides = await getFilteredRidesTime(
          allRides,
          preFilteredRides,
          myRide
        );
        setAvailableConnections(filteredRides);
        localStorage.setItem("availableCount", filteredRides.length);
      } catch (e) {
        console.error("The error is", e);
      }
    }
    fetchMatches();
  }, [allRides]);

  if (!myRide || !allRides) {
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
          ? availableConnections.map((rideObj) => (
              <ConnectionTile
                key={rideObj[0]}
                matchDetails={allRides[rideObj[0]]}
                timeDiff={rideObj[1]}
                distDiff={rideObj[2]}
                userRide={myRide}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AvailableConnectionsList;

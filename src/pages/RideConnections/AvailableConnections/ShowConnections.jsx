import React, { useEffect, useState } from "react";
import { getPreFilteredRides } from "../../../helpers/getPreFilteredRidesNew";
import { getFilteredRidesTime } from "../../../helpers/getFilteredRidesTime";
import ConnectionTile from "../components/ConnectionTile";
import { createLocationString } from "../helpers";

const ShowConnections = (props) => {
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
      } catch (e) {
        console.error(e);
      }
    }
    fetchMatches();
  }, [allRides]);

  if (!myRide || !allRides) {
    return null;
  }

  return (
    <div>
      Showing Matches for
      <div>
        <h4>{createLocationString(myRide.location)}</h4>
        <h4>{myRide.date}</h4>
      </div>
      <div>
        <div>Matches:</div>
        {availableConnections
          ? availableConnections.map((rideObj) => (
              <ConnectionTile
                key={rideObj[0]}
                matchDetails={allRides[rideObj[0]]}
                timeDiff={rideObj[1]}
                userRide={myRide}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ShowConnections;

import React, { useEffect, useState } from "react";
import { getPreFilteredRides } from "../../helpers/getPreFilteredRides";
import { getFilteredRidesTime } from "../../helpers/getFilteredRidesTime";
import MatchTile from "./components/MatchTile";
import { createLocationString } from "./helpers";

const ShowMatchesNew = (props) => {
  const { ride, allRides } = props;
  const [myMatches, setMyMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const preFilteredRides = getPreFilteredRides(allRides, ride);
        const filteredRides = await getFilteredRidesTime(
          allRides,
          preFilteredRides,
          ride
        );
        setMyMatches(filteredRides);
      } catch (e) {
        console.error(e);
      }
    }
    fetchMatches();
  }, [allRides]);

  if (!ride || !allRides) {
    return null;
  }

  return (
    <div>
      Showing Matches for
      <div>
        <h4>{createLocationString(ride.location)}</h4>
        <h4>{ride.date}</h4>
      </div>
      <div>
        <div>Matches:</div>
        {myMatches
          ? myMatches.map((rideObj) => (
              <MatchTile
                matchDetails={allRides[rideObj[0]]}
                timeDiff={rideObj[1]}
                userRide={ride}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ShowMatchesNew;

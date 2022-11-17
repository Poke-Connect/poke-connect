import React, { useEffect, useState } from "react";
import { getPreFilteredRides } from "../../helpers/getPreFilteredRides";
import { getFilteredRidesTime } from "../../helpers/getFilteredRidesTime";

const ShowMatchesNew = (props) => {
  const { ride, allRides } = props;
  const [myMatches, setMyMatches] = useState([]);

  console.log("allRides", allRides);

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
  console.log("my matches", myMatches);
  return (
    <div>
      Showing Matches for
      <div>
        <h4>{ride.location}</h4>
      </div>
      <div>
        <div>Matches:</div>
        {myMatches
          ? myMatches.map((rideObj) => (
              <div>
                <h5>{allRides[rideObj[0]].location}</h5>
                <h5>{rideObj[1]}</h5>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ShowMatchesNew;

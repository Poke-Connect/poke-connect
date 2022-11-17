//STALE_FILE

import React from "react";
import { getFilteredRidesLocality } from "../../helpers/getFilteredRidesLocality";
import { getPreFilteredRides } from "../../helpers/getPreFilteredRides";

const ShowMatches = (props) => {
  const { ride, allRides } = props;

  if (!ride || !allRides) {
    return null;
  }

  const preFilteredRides = getPreFilteredRides(allRides, ride);

  const filteredRides = getFilteredRidesLocality(
    allRides,
    preFilteredRides,
    ride
  );

  return (
    <div>
      Showing Matches for
      <div>
        <h4>{ride.location}</h4>
      </div>
      <div>
        <div>Matches:</div>
        {filteredRides
          ? filteredRides.map((rideObj) => (
              <div>
                <h5>{allRides[rideObj[0]].location}</h5>
                <h5>{rideObj.score}</h5>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ShowMatches;

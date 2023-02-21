import React from "react";
import { getfilteredTrips } from "../helpers";
import TripsList from "./TripsList";

const ShowTrips = (props) => {
  const { myTrips } = props;
  if (!myTrips) {
    return null;
  }
  const filteredTrips = getfilteredTrips(myTrips);
  return (
    <div>
      <div>
        <TripsList
          heading={"Upcoming Trips"}
          tripsList={filteredTrips[0]}
          upcoming={true}
        />
      </div>
      <div className="mt-10">
        <TripsList
          heading={"Completed Trips"}
          tripsList={filteredTrips[1]}
          upcoming={false}
        />
      </div>
    </div>
  );
};

export default ShowTrips;

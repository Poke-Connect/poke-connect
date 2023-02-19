import React, { useState, useEffect, FC } from "react";
import { UserAuth } from "context/AuthProvider";
import ShowTrips from "./components/ShowTrips";
import Heading from "components/UI/Heading";
import EmptyItem from "components/UI/EmptyItem";
import { emptyStrings } from "strings/emptyStrings";
import { getUserRides } from "api/ride";

const MyTrips: FC = () => {
  const { user } = UserAuth();

  const [myTrips, setMyTrips] = useState<any>([]);

  useEffect(() => {
    const fetchUserRides = async () => {
      const rides = await getUserRides(user._id);
      setMyTrips(rides);
    };

    user._id && fetchUserRides();
  }, [user._id]);

  return (
    <div className="pl-6 pr-7 w-screen ">
      <Heading text={"My Trips"} />
      {!myTrips && <EmptyItem text={emptyStrings.MY_TRIPS} />}
      <div className="pt-1">{myTrips && <ShowTrips myTrips={myTrips} />}</div>
    </div>
  );
};

export default MyTrips;

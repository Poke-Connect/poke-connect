import React, { useState, useEffect, FC } from "react";
import ShowTrips from "./components/ShowTrips";
import Heading from "components/UI/Heading";
import EmptyItem from "components/UI/EmptyItem";
import { getUserRides } from "api/ride";
import { useSelector } from "react-redux";
import { EMPTY_STRINGS } from "appConstants";

const MyTrips: FC = () => {
  const { user } = useSelector((store: any) => store.auth);
  const [myTrips, setMyTrips] = useState<any>([]);

  useEffect(() => {
    const fetchUserRides = async () => {
      const rides = await getUserRides(user._id);
      setMyTrips(rides);
    };

    user._id && fetchUserRides();
  }, [user._id]);

  return (
    <div className="px-6 w-screen flex flex-col">
      <Heading text={"My Trips"} />
      {!myTrips && <EmptyItem text={EMPTY_STRINGS.MY_TRIPS} />}
      <div className="pt-1">{myTrips && <ShowTrips myTrips={myTrips} />}</div>
    </div>
  );
};

export default MyTrips;

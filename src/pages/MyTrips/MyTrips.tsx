import React, { FC } from "react";
import ShowTrips from "./components/ShowTrips";
import EmptyItem from "components/UI/EmptyItem";
import { useSelector } from "react-redux";
import { EMPTY_STRINGS } from "appConstants";
import { useUserRidesFetch } from "customHooks";
import { Heading } from "components";

const MyTrips: FC = () => {
  const { user } = useSelector((store: any) => store.auth);
  const myTrips = useUserRidesFetch(user._id);

  return (
    <div className="px-6 w-screen flex flex-col">
      <Heading text={"My Trips"} />
      {!myTrips && <EmptyItem text={EMPTY_STRINGS.MY_TRIPS} />}
      <div className="pt-1">{myTrips && <ShowTrips myTrips={myTrips} />}</div>
    </div>
  );
};

export default MyTrips;

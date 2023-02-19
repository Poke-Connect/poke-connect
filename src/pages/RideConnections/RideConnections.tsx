import React, { FC, useEffect, useState } from "react";
import FooterLayout from "./components/FooterLayout";
import { Outlet, useParams } from "react-router-dom";
import { UserAuth } from "context/AuthProvider";
import { getConnectedRideConnections, getRide } from "api/ride";
import { getFilteredRides } from "api/ride";
import { getFilteredRidesTimeNew } from "helpers/getFilteredRidesTimeNew";
import { getConnectedCount } from "./helpers";

const RideConnections: FC = () => {
  const params = useParams();
  const { rideId } = params;
  const { user } = UserAuth();

  const [myRide, setMyRide] = useState(null);
  const [connectedConnections, setConnectedConnections] = useState([]);
  const [availableConnections, setAvailableConnections] = useState<any>([]);
  const [connectedCount, setConnectedCount] = useState<number>(0);
  const [availableCount, setAvailableCount] = useState<number>(0);

  //shift this to custom hook
  useEffect(() => {
    const fetchConnections = async () => {
      if (rideId) {
        const ride = await getRide(rideId);
        setMyRide(ride);

        const connectedRideConnections = await getConnectedRideConnections(
          rideId
        );
        setConnectedConnections(connectedRideConnections);

        setConnectedCount(getConnectedCount(connectedRideConnections));

        let filteredRides: any;
        if (ride) {
          filteredRides = await getFilteredRides(
            rideId,
            user._id,
            ride.date,
            ride.rideType
          );
        } else {
          filteredRides = [];
        }

        const filteredTimeRides = await getFilteredRidesTimeNew(
          ride,
          filteredRides
        );
        setAvailableConnections(filteredTimeRides);
        setAvailableCount(filteredTimeRides ? filteredTimeRides.length : 0);
      }
    };

    fetchConnections();
  }, [rideId]);

  return (
    <div className="flex-col flex justify-between ">
      <Outlet
        context={{ myRide, connectedConnections, availableConnections }}
      />
      <FooterLayout
        rideId={rideId}
        connectedCount={connectedCount}
        availableCount={availableCount}
      />
    </div>
  );
};

export default RideConnections;

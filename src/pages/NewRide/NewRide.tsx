import React, { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getTodaysDate, getTimeNow } from "helpers/dateHelper";
import { toast } from "react-toastify";
import { createNewRideBackend } from "db/dbWrites";
import { useSocket } from "context/SocketContext";
import { useSelector } from "react-redux";
import { useDirections } from "customHooks";
import { TOAST_STRINGS } from "appConstants";
import { ButtonContainer, DateTimeContainer, GMapElement } from "./components";
import { Heading } from "components";
import AddressInputContainer from "./components/AddressInputContainer";

const NewRide: FC = () => {
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = useSelector((store: any) => store.auth);
  const userId = user._id;
  const socket = useSocket();

  const [dateValue, setDateValue] = useState<any>(getTodaysDate());
  const [timeValue, setTimeValue] = useState<any>(getTimeNow());
  const [locationValue, setLocationValue] = useState<any>(null);
  const [fromValue, setFromValue] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const onFindMatchesHandler = async () => {
    if (!locationValue) {
      setError(true);
      return;
    }
    try {
      const rideId = await createNewRideBackend(
        rideType,
        userId,
        dateValue,
        timeValue,
        locationValue,
        tripDistance,
        fromValue
      );
      if (socket) {
        socket.emit("create-ride", { rideId: rideId });
      }
      navigate(`/rideconnections/${rideId}/available`);
    } catch (e) {
      toast.error(TOAST_STRINGS.ERROR);
    }
  };

  const { directionsResponse, tripDistance } = useDirections(
    rideType,
    locationValue,
    setError
  );

  return (
    <div className="bg-white flex flex-col items-start w-screen h-full flex-grow">
      <Heading text={"Find a connection"} styles="ml-8" />
      <div className={`flex flex-col w-full pt-1 flex-grow `}>
        <AddressInputContainer
          rideType={rideType}
          setLocationValue={setLocationValue}
          setFromValue={setFromValue}
        />
        <div className="w-5/6 pl-4 ml-3">
          <DateTimeContainer
            dateValue={dateValue}
            setDateValue={setDateValue}
            timeValue={timeValue}
            setTimeValue={setTimeValue}
          />
          <ButtonContainer onFindMatchesHandler={onFindMatchesHandler} />
          {error && (
            <p className="text-primary pt-2 pl-1">
              Please enter a valid location
            </p>
          )}
        </div>
        <GMapElement directionsResponse={directionsResponse} />
      </div>
    </div>
  );
};

export default NewRide;

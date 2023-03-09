import React, { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getTodaysDate, getTimeNow } from "helpers/dateHelper";
import Heading from "components/UI/Heading";
import RideLine from "components/RideLine";
import { toast } from "react-toastify";
import { createNewRideBackend } from "db/dbWrites";
import { Socket } from "context/SocketContext";
import { useSelector } from "react-redux";
import { useDirections } from "customHooks";
import { TOAST_STRINGS, COMMON_STRINGS } from "appConstants";
import {
  ButtonContainer,
  DateTimeContainer,
  GMapElement,
  InputField,
  PlacesAutocomplete,
} from "./components";

const NewRide: FC = () => {
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = useSelector((store: any) => store.auth);
  const userId = user._id;
  const socket = Socket();
  const { DESTINATION_RIDE } = COMMON_STRINGS;

  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());
  const [locationValue, setLocationValue] = useState(null);

  const navigate = useNavigate();

  const onFindMatchesHandler = async () => {
    try {
      const rideId = await createNewRideBackend(
        rideType,
        userId,
        dateValue,
        timeValue,
        locationValue,
        tripDistance
      );
      if (socket) {
        socket.emit("create-ride", { rideId: rideId });
      }
      toast.success(TOAST_STRINGS.RIDE_CREATION_SUCCESS);
      navigate(`/rideconnections/${rideId}/available`);
    } catch (e) {
      toast.error(TOAST_STRINGS.ERROR);
    }
  };

  const { directionsResponse, tripDistance } = useDirections(
    rideType,
    locationValue
  );

  return (
    <div
      id="container"
      className="bg-white flex flex-col items-start w-screen h-full flex-grow"
    >
      <div id="upper" className="flex flex-col w-full">
        <div className="ml-8">
          <Heading text={"Find a connection"} />
        </div>
        <div className="flex flex-col w-full pt-1 pl-2 flex-grow">
          <div className="flex flex-row w-full pl-1 ">
            <RideLine height={"m"} type={"newRide"} />
            <div
              className={`flex w-full ${
                rideType === DESTINATION_RIDE
                  ? "flex-col"
                  : "flex flex-col-reverse"
              }`}
            >
              <div>
                <PlacesAutocomplete
                  setLocationValue={setLocationValue}
                  placeholder={
                    rideType === DESTINATION_RIDE ? "From where?" : "Where to?"
                  }
                />
              </div>
              <div>
                <InputField
                  name={"KIA"}
                  disabled={true}
                  placeholder={"Kempegowda International Airport"}
                  styles={"placeholder-black"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full my-2 pl-6 justify-between">
            <DateTimeContainer
              dateValue={dateValue}
              setDateValue={setDateValue}
              timeValue={timeValue}
              setTimeValue={setTimeValue}
            />
          </div>
          <div className="flex w-full m-5">
            <ButtonContainer
              onFindMatchesHandler={onFindMatchesHandler}
              locationValue={locationValue}
            />
          </div>
        </div>
      </div>

      <div id="lower" className="flex-grow w-full">
        {<GMapElement directionsResponse={directionsResponse} />}
      </div>
    </div>
  );
};

export default NewRide;

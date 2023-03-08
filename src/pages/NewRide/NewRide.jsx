/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import GMapElement from "./components/GMapElement";
import { useNavigate, useLocation } from "react-router-dom";
import DateTimeContainer from "./components/DateTimeContainer";
import { getTodaysDate, getTimeNow } from "helpers/dateHelper";
import PlacesAutocomplete from "./components/PlacesAutoComplete";
import { getRouteObject, getTripDistance } from "./helpers";
import InputField from "./components/InputField";
import Heading from "components/UI/Heading";
import ButtonContainer from "./components/ButtonContainer";
import RideLine from "components/RideLine";
import { toast } from "react-toastify";
import { toastStrings } from "constants/toastStrings";
import { createNewRideBackend } from "dbNew/dbWrites";
import { Socket } from "context/SocketContext";
import { useSelector } from "react-redux";

const DESTINATION_RIDE = "DESTINATION_RIDE"; // From X --> TO_AIRPORT

const NewRide = () => {
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = useSelector((store) => store.auth);
  const userId = user._id;
  const socket = Socket();

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());
  const [locationValue, setLocationValue] = useState(null);
  const [tripDistance, setTripDistance] = useState(0);

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
      //CREATE A SOCKET EVENT
      if (socket) {
        socket.emit("create-ride", { rideId: rideId });
      }
      toast.success(toastStrings.RIDE_CREATION_SUCCESS);
      navigate(`/rideconnections/${rideId}/available`);
    } catch (e) {
      toast.error(toastStrings.ERROR);
    }

    //IF REQUIRED: Distance and duration can be taken from minRouteObject
  };

  useEffect(() => {
    const airportCordinates = new google.maps.LatLng(13.199379, 77.710136);
    const fetchDirections = async () => {
      const minRouteObject = await getRouteObject(
        rideType,
        locationValue,
        airportCordinates
      );
      const distance = getTripDistance(minRouteObject);
      setDirectionsResponse(minRouteObject);
      setTripDistance(distance);
    };
    locationValue && fetchDirections();
  }, [locationValue, rideType]);

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

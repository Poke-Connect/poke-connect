/* eslint-disable no-undef */
import React, { useState } from "react";
import GMapElement from "./components/GMapElement";
import { useNavigate, useLocation } from "react-router-dom";
import DateTimeContainer from "./components/DateTimeContainer";
import { getTodaysDate, getTimeNow } from "helpers/dateHelper";
import { UserAuth } from "context/AuthProvider";
import PlacesAutocomplete from "./components/PlacesAutoComplete";
import { v4 as uuidv4 } from "uuid";
import { getRouteObject, getTripDistance } from "./helpers";
import InputField from "./components/InputField";
import { createNewRideDb } from "db/createNewRideDb";
import Heading from "components/UI/Heading";
import ButtonContainer from "./components/ButtonContainer";
import RideLine from "components/RideLine";
import { toast } from "react-toastify";
import { toastStrings } from "strings/toastStrings";
import { createNewRideBackend } from "dbNew/dbWrites";

const DESTINATION_RIDE = "DESTINATION_RIDE"; // From X --> TO_AIRPORT

const NewRide = () => {
  console.log("NEW RIDE PAGE");
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = UserAuth();
  const userId = user._id;

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());
  const [locationValue, setLocationValue] = useState(null);

  const navigate = useNavigate();

  const onFindMatchesHandler = async () => {
    const airportCordinates = new google.maps.LatLng(13.199379, 77.710136);
    try {
      const minRouteObject = await getRouteObject(
        rideType,
        locationValue,
        airportCordinates
      );

      setDirectionsResponse(minRouteObject);

      const distance = getTripDistance(minRouteObject);

      const rideId = await createNewRideBackend(
        rideType,
        userId,
        dateValue,
        timeValue,
        locationValue,
        distance
      );

      toast.success(toastStrings.RIDE_CREATION_SUCCESS);
      navigate(`/rideconnections/${rideId}/available`);
    } catch (e) {
      toast.error(toastStrings.ERROR);
    }

    //IF REQUIRED: Distance and duration can be taken from minRouteObject
  };

  return (
    <div
      id="container"
      className="bg-white flex flex-col items-start w-screen h-full"
    >
      <div className="ml-8 flex">
        <Heading text={"Find a connection"} />
      </div>
      <div className="flex flex-col w-full pt-1 pl-2">
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
        <div className="flex flex-row w-full my-2 pl-6  justify-between">
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
      <div className=" w-full h-[45%]">
        {<GMapElement directionsResponse={directionsResponse} />}
      </div>
    </div>
  );
};

export default NewRide;

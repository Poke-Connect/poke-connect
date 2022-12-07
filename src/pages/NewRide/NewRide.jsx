/* eslint-disable no-undef */
import React, { useState } from "react";
import GMapElement from "./components/GMapElement";
import { useNavigate, useLocation } from "react-router-dom";
import DateTimeContainer from "./components/DateTimeContainer";
import { getTodaysDate, getTimeNow } from "helpers/dateHelper";
import { UserAuth } from "context/AuthContext";
import PlacesAutocomplete from "./components/PlacesAutoComplete";
import { v4 as uuidv4 } from "uuid";
import { getRouteObject } from "./helpers";
import InputField from "./components/InputField";
import { createNewRideDb } from "db/createNewRideDb";
import Heading from "components/UI/Heading";
import ButtonContainer from "./components/ButtonContainer";

const DESTINATION_RIDE = "DESTINATION_RIDE"; // From X --> TO_AIRPORT

const NewRide = () => {
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = UserAuth();
  const userId = user.uid;

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());
  const [locationValue, setLocationValue] = useState(null);

  const rideId = uuidv4();

  const navigate = useNavigate();

  const onFindMatchesHandler = async () => {
    const airportCordinates = new google.maps.LatLng(13.199379, 77.710136);
    const minRouteObject = await getRouteObject(
      rideType,
      locationValue,
      airportCordinates
    );

    setDirectionsResponse(minRouteObject);

    createNewRideDb(
      rideId,
      rideType,
      userId,
      dateValue,
      timeValue,
      locationValue
    );

    navigate(`/rideconnections/${rideId}/available`);
    //IF REQUIRED: Distance and duration can be taken from minRouteObject
  };

  return (
    <div
      id="container"
      className="bg-white flex flex-col items-center pt-2 h-screen"
    >
      <div className="bg-white flex flex-col rounded-2xl">
        <Heading text={"Find a connection"} />
        <div className="bg-white flex-1 items-center md:w-[600px] pt-12">
          <div className="bg-white-500 flex-1 flex-col">
            <div className="h-1/2">
              <div
                className={`flex ${
                  rideType === DESTINATION_RIDE
                    ? "flex-col"
                    : "flex flex-col-reverse"
                }`}
              >
                <PlacesAutocomplete
                  setLocationValue={setLocationValue}
                  placeholder={
                    rideType === DESTINATION_RIDE ? "From where?" : "Where to?"
                  }
                />
                <div>
                  <InputField
                    name={"KIA"}
                    disabled={true}
                    placeholder={"Kempegowda International Airport"}
                    styles={"placeholder-black"}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full items-center justify-center">
                <DateTimeContainer
                  dateValue={dateValue}
                  setDateValue={setDateValue}
                  timeValue={timeValue}
                  setTimeValue={setTimeValue}
                />
              </div>
              <div>
                <ButtonContainer
                  onFindMatchesHandler={onFindMatchesHandler}
                  locationValue={locationValue}
                />
              </div>
            </div>
            <div className=" w-full">
              {<GMapElement directionsResponse={directionsResponse} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRide;

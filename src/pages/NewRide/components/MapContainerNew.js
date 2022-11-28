/* eslint-disable no-undef */
import React, { useState } from "react";
import { createRoute } from "../../../helpers/createRoute";
import GMapElement from "./GMapElement";
import { useNavigate, useLocation } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import DateTimeContainer from "./DateTimeContainer";
import {
  getTodaysDate,
  createDateString,
  createTimeStamp,
  getTimeNow,
} from "../../../helpers/dateHelper";
import { UserAuth } from "../../../context/AuthContext";
import PlacesAutocomplete from "./PlacesAutoComplete";
import { v4 as uuidv4 } from "uuid";

const DESTINATION_RIDE = "DESTINATION_RIDE"; // From X --> TO_AIRPORT

const MapContainer = () => {
  const location = useLocation();
  const rideType = location.state.rideType;
  const { user } = UserAuth();
  const userId = user.uid;

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());
  const [locationValue, setLocationValue] = useState(null);

  const rideId = uuidv4();

  const db = getDatabase();
  const ridesDbRef = ref(db, `rides/${rideId}`);
  const userRidesDbRef = ref(db, `userRides/${userId}/${rideId}`);

  const navigate = useNavigate();

  const airportCordinates = new google.maps.LatLng(13.199379, 77.710136);

  const getRouteObject = () => {
    if (!rideType) {
      return {};
    } else if (rideType === DESTINATION_RIDE) {
      return createRoute(locationValue, airportCordinates);
    } else {
      return createRoute(airportCordinates, locationValue);
    }
  };

  const onFindMatchesHandler = async () => {
    const minRouteObject = await getRouteObject();
    setDirectionsResponse(minRouteObject);
    //IF REQUIRED: Distance and duration can be taken from minRouteObject
    const rideData = {
      rideType: rideType,
      creatorId: user.uid,
      date: createDateString(dateValue),
      timeStampRide: createTimeStamp(dateValue, timeValue),
      location: locationValue,
      rideId: rideId,
      discoverability: true,
      time: timeValue,
    };
    set(ridesDbRef, rideData);
    set(userRidesDbRef, {
      timeStampRide: createTimeStamp(dateValue, timeValue),
    });
    navigate(`/connections/${rideId}/available`);
  };

  return (
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
              <input
                type="location"
                name="KIA"
                className={
                  "bg-lightGray inline-flex p-2 m-2 text-lg w-5/6 rounded-lg placeholder-black"
                }
                placeholder={"Kempegowda International Airport"}
                disabled={true}
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
            <button
              onClick={onFindMatchesHandler}
              className="bg-black inline-flex p-2 justify-center m-4 text-lg w-5/6 rounded-lg text-white"
            >
              Find Connections
            </button>
          </div>
        </div>
        <div className="h-1/2 w-full">
          {<GMapElement directionsResponse={directionsResponse} />}
        </div>
      </div>
    </div>
  );
};

export default MapContainer;

import React, { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { createRoute } from "../../../helpers/createRoute";
import GMapElement from "./GMapElement";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import DateTimeContainer from "./DateTimeContainer";
import {
  getTodaysDate,
  createDateString,
  createTimeStamp,
  getTimeNow,
} from "../../../helpers/dateHelper";
import InputElement from "../../../components/InputElement";
import HomeButton from "../../Home/components/HomeButton";
import Arrow from "../../../assets/icons/Arrow";

const MapContainer = () => {
  // const [map, setMap] = useState(/** @type google.maps.map */ (null));
  getTodaysDate();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [placeholderText, setPlaceHolderText] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [rideType, setRideType] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
  const [timeValue, setTimeValue] = useState(getTimeNow());

  const rideId = "120";

  const db = getDatabase();
  const dbRef = ref(db, "rides/" + rideId);

  const originRef = useRef();

  const navigate = useNavigate();

  // eslint-disable-next-line no-undef
  const airportCordinates = new google.maps.LatLng(13.199379, 77.710136);

  const getRouteObject = () => {
    if (!rideType) {
      return {};
    } else if (rideType === "TO_AIRPORT") {
      return createRoute(originRef.current.value, airportCordinates);
    } else {
      return createRoute(airportCordinates, originRef.current.value);
    }
  };

  const onTravelToAirportHandler = () => {
    setShowInput(true);
    setPlaceHolderText("From?");
    setRideType("TO_AIRPORT");
  };

  const onTravelFromAirportHandler = () => {
    setShowInput(true);
    setPlaceHolderText("Where to?");
    setRideType("FROM_AIRPORT");
  };

  const onConfirmRouteHandler = async () => {
    const minRouteObject = await getRouteObject();
    setDirectionsResponse(minRouteObject);
    setDistance(minRouteObject.routeDistance);
    setDuration(minRouteObject.routeTime);
  };

  const onFindMatchesHandler = async () => {
    const minRouteObject = await getRouteObject();
    setDirectionsResponse(minRouteObject);
    setDistance(minRouteObject.routeDistance);
    setDuration(minRouteObject.routeTime);

    const rideData = {
      rideType: rideType,
      creatorId: "1",
      date: createDateString(dateValue),
      time: createTimeStamp(dateValue, timeValue),
      location: originRef.current.value,
      rideId: rideId,
    };
    set(dbRef, rideData);
    navigate(`/matches/${rideId}`);
  };

  return (
    <div className="bg-white flex-1 items-center md:w-[600px]">
      {showInput && (
        <div className="bg-white-500 flex-1 flex-col">
          <div className="h-1/2">
            <div>
              <Autocomplete restrictions={{ country: "in" }}>
                <InputElement
                  name={placeholderText}
                  placeholder={"From where?"}
                  originRef={originRef}
                  disabled={false}
                />
              </Autocomplete>
              <InputElement
                className="placeholder-black"
                name={placeholderText}
                placeholder={"Kempegowda International Airport"}
                originRef={originRef}
                disabled={true}
                placeholderTextColor={"black"}
              />
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
                Schedule
              </button>
            </div>
          </div>
          <div className="h-1/2 w-full">
            {<GMapElement directionsResponse={directionsResponse} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapContainer;

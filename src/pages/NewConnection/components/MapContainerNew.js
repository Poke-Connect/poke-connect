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
} from "../../../helpers/dateHelper";

const MapContainer = () => {
  // const [map, setMap] = useState(/** @type google.maps.map */ (null));
  getTodaysDate();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [placeholderText, setPlaceHolderText] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [rideType, setRideType] = useState(null);
  const [dateValue, setDateValue] = useState(getTodaysDate());
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
    setShowMap(true);
    setDirectionsResponse(minRouteObject);
    setDistance(minRouteObject.routeDistance);
    setDuration(minRouteObject.routeTime);
  };

  const onFindMatchesHandler = async () => {
    const rideData = {
      rideType: rideType,
      creatorId: "1",
      date: createDateString(dateValue),
      time: createTimeStamp(dateValue),
      location: originRef.current.value,
      rideId: rideId,
    };
    set(dbRef, rideData);
    navigate(`/matches/${rideId}`);
  };

  return (
    <>
      <div>
        <button onClick={onTravelToAirportHandler}>Travel to airport</button>
        <button onClick={onTravelFromAirportHandler}>
          Travel from airport
        </button>
      </div>
      {showInput && (
        <div>
          <div>
            <div>
              <Autocomplete restrictions={{ country: "in" }}>
                <input
                  type="location"
                  name={placeholderText}
                  placeholder={placeholderText}
                  ref={originRef}
                />
              </Autocomplete>
            </div>
            <div>
              <DateTimeContainer
                dateValue={dateValue}
                setDateValue={setDateValue}
              />
            </div>
          </div>
          {showMap && <GMapElement directionsResponse={directionsResponse} />}
          <div>
            <button onClick={onConfirmRouteHandler}>Confirm Route</button>
          </div>
          <div>
            {distance ? <h1>{distance}</h1> : null}
            {duration ? <h1>{duration}</h1> : null}
          </div>
          <div>
            <button onClick={onFindMatchesHandler}>Find Matches</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MapContainer;

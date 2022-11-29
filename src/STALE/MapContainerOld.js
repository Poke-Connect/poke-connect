//STALE_FILE

import React, { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import ConnectionForm from "./ConnectionForm";
import {
  calculateMinRouteSameOrigin,
  calculateMinRouteNoSame,
  calculateRoute,
} from "./helpers_stale";
import GMapElement from "../pages/NewRide/components/GMapElement";

//V0 --> only for same origin or same destinations

const MapContainer = () => {
  const [map, setMap] = useState(/** @type google.maps.map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [item, setItem] = useState(null);

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  const originTwoRef = useRef();
  const destinationTwoRef = useRef();

  const calculateMinPoolRoute = async () => {
    //TODO: condition to find which function to use
    // const minRouteObject = await calculateMinRouteSameOrigin(
    //   originRef.current.value,
    //   destinationRef.current.value,
    //   destinationTwoRef.current.value
    // );
    const minRouteObject = await calculateRoute(
      originRef.current.value,
      destinationRef.current.value,
      destinationTwoRef.current.value
    );
    setDirectionsResponse(minRouteObject.routeResults);
    setDistance(minRouteObject.routeDistance);
    setDuration(minRouteObject.routeTime);
  };

  const calculateMinPoolRouteNoSame = async () => {
    //TODO: condition to find which function to use
    const minRouteObject = await calculateMinRouteNoSame(
      originRef.current.value,
      destinationRef.current.value,
      originTwoRef.current.value,
      destinationTwoRef.current.value
    );
    setItem(originRef.current.value);

    setDirectionsResponse(minRouteObject.routeResults);
    setDistance(minRouteObject.routeDistance);
    setDuration(minRouteObject.routeTime);
    // console.log("route object", minRouteObject.routeResults);
  };

  // const inputSetter = () => {
  //   console.log("item = ", item);
  // };
  const getLocality = () => {
    setItem(originRef.current.value);
    if (!item) {
      return;
    }
    // console.log("1item =  1 ", item);

    const stringifiedItem = JSON.stringify(item);
    // console.log("1item =  2 ", stringifiedItem);

    const itemArr = stringifiedItem.split(",");
    // console.log("1item =  3 ", itemArr);

    const locality = itemArr[itemArr.length - 4];
    // console.log("1item = ", locality);

    const newLocationArr = [];

    for (let i = itemArr.length - 4; i >= 0; i--) {
      newLocationArr.push(itemArr[i]);
    }

    console.log("newLocationArr = ", newLocationArr);
  };
  // changeItem();

  // console.log("1item = ", JSON.stringify(item));

  return (
    <div>
      Location Map
      <GMapElement setMap={setMap} directionsResponse={directionsResponse} />
      <div>
        <Autocomplete restrictions={{ country: "in" }}>
          <input
            type="location"
            name="from"
            placeholder="Pass1: From?"
            ref={originRef}
          />
        </Autocomplete>
        <Autocomplete restrictions={{ country: "in" }}>
          <input
            type="text"
            name="to"
            placeholder="Pass1: Where to?"
            ref={destinationRef}
          />
        </Autocomplete>
        {/* <Autocomplete restrictions={{ country: "in" }}>
          <input
            type="location"
            name="from"
            placeholder="Pass2: From?"
            ref={originTwoRef}
          />
        </Autocomplete>
        <Autocomplete restrictions={{ country: "in" }}>
          <input
            type="text"
            name="to"
            placeholder="Pass2: Where to?"
            ref={destinationTwoRef}
          />
        </Autocomplete> */}
      </div>
      {/* <button onClick={getLocality}>inputSetter</button> */}
      <button onClick={getLocality}>Travel to airport</button>
      <button onClick={calculateMinPoolRoute}>Travel from airport</button>
      <button onClick={calculateMinPoolRoute}>Find a match</button>
      {/* <button onClick={calculateMinPoolRouteNoSame}>Calculate no same</button> */}
      {/* <button onClick={calculateMinPoolRouteNoSame}>Calculate no same</button> */}
      <div>
        {distance ? <h1>{distance}</h1> : null}
        {duration ? <h1>{duration}</h1> : null}
      </div>
    </div>
  );
};

export default MapContainer;

/* eslint-disable no-undef */
import React, { FC } from "react";
import { GoogleMap, DirectionsRenderer, MarkerF } from "@react-google-maps/api";
import { MAP_FIXED_COORD } from "AppConfig";

interface IProps {
  directionsResponse: any;
}

const GMapElement: FC<IProps> = (props) => {
  const { directionsResponse } = props;

  const customIcon = {
    url: "https://drive.google.com/uc?id=1OhdcazbogX9pEnun44Le5yIeSMYzBmgJ", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  };

  const { LAT: FIXED_LAT, LNG: FIXED_LNG } = MAP_FIXED_COORD;
  return (
    <div className="mt-2 md:w-full h-full flex-grow w-full">
      <GoogleMap
        center={{ lat: FIXED_LAT, lng: FIXED_LNG }}
        zoom={18}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <MarkerF
          position={{ lat: FIXED_LAT, lng: FIXED_LNG }}
          icon={customIcon}
        />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default GMapElement;

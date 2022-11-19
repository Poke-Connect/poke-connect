import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const center = { lat: 12.972442, lng: 77.580643 };

const GMapElement = (props) => {
  const { directionsResponse } = props;
  return (
    <div className="mt-2 w-screen md:w-full h-screen">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {/* <Marker position={center} /> */}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default GMapElement;

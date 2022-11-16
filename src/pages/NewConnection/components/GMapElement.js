import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const center = { lat: 12.959172, lng: 77.697418 };

const GMapElement = (props) => {
  const { setMap, directionsResponse } = props;
  return (
    <div style={{ width: 400, height: 400 }}>
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
        // onLoad={(map) => setMap(map)}
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

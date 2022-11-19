import React from "react";
import MapContainer from "./components/MapContainerNew";

const NewConnection = () => {
  return (
    <div className="bg-white flex flex-col items-center pt-2 h-screen">
      <div className="bg-white p-3 flex flex-col rounded-2xl">
        <h2 className="text-2xl text-left ml-5">Find a connection</h2>
        <MapContainer  />
      </div>
    </div>
  );
};

export default NewConnection;

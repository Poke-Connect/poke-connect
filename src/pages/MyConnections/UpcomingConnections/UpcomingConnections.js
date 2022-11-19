import React from "react";
import ConnectionCell from "../CollectionCell/ConnectionCell";

const UpcomingConnections = ({ pokeDetails, onClick }) => {
  return (
    <>
      <div className="pt-6">
        <h2 className="flex font-semibold text-base">Upcoming Trips</h2>
        {pokeDetails.map(function (object, i) {
          return <ConnectionCell pokeDetails={object} onClick={onClick} />;
        })}
      </div>
    </>
  );
};

UpcomingConnections.propTypes = {};

export default UpcomingConnections;

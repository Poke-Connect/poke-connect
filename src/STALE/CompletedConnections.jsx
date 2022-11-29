//STALE_FILE

import React from "react";
import PropTypes from "prop-types";
import ConnectionCell from "./ConnectionCell";

const CompletedConnections = ({ pokeDetails, onClick }) => {
  return (
    <>
      <div className="pt-6">
        <h2 className="flex font-semibold text-base">Completed Trips</h2>
        {pokeDetails.map(function (object, i) {
          return <ConnectionCell pokeDetails={object} onClick={onClick} />;
        })}
      </div>
    </>
  );
};

CompletedConnections.propTypes = {};

export default CompletedConnections;

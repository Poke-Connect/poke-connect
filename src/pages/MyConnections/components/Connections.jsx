import React from "react";
import ConnectionTile from "./ConnectionTile";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections) {
    return;
  }
  return (
    <div>
      {Object.keys(myConnections).map((connectionId) => (
        <ConnectionTile
          key={connectionId}
          connectionData={myConnections[connectionId]}
        />
      ))}
    </div>
  );
};

export default Connections;

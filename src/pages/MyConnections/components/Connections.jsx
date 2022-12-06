import React from "react";
import ConnectionElement from "./ConnectionElement";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections) {
    return;
  }
  return (
    <div>
      {Object.keys(myConnections).map((connectionId) => (
        <ConnectionElement
          key={connectionId}
          connectionId={connectionId}
          connectionData={myConnections[connectionId]}
        />
      ))}
    </div>
  );
};

export default Connections;

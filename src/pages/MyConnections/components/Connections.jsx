import EmptyItem from "components/UI/EmptyItem";
import React from "react";
import ConnectionElement from "./ConnectionElement";

const EMPTY_CONNECTION_TEXT =
  "No connections yet. Please go to the Available tab to find new matches.";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections) {
    return <EmptyItem text={EMPTY_CONNECTION_TEXT} />;
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

import EmptyItem from "components/UI/EmptyItem";
import React from "react";
import ConnectionElement from "./ConnectionElement";

const EMPTY_CONNECTION_TEXT =
  "No connections yet, create a new ride to find connections.";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections || Object.keys(myConnections).length === 0) {
    return <EmptyItem text={EMPTY_CONNECTION_TEXT} />;
  }

  const sortedConnections = Object.entries(myConnections)?.sort(
    (a, b) => b[1].date - a[1].date
  );

  return (
    <div>
      {sortedConnections.map((connection) => (
        <ConnectionElement
          key={connection[0]}
          connectionId={connection[0]}
          connectionData={connection[1]}
        />
      ))}
    </div>
  );
};

export default Connections;

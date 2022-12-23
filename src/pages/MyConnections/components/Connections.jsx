import EmptyItem from "components/UI/EmptyItem";
import React from "react";
import { emptyStrings } from "strings/emptyStrings";
import ConnectionElement from "./ConnectionElement";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections || Object.keys(myConnections).length === 0) {
    return <EmptyItem text={emptyStrings.MY_CONNECTIONS} />;
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

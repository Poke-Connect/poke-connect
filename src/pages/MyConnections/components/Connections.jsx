import EmptyItem from "components/UI/EmptyItem";
import React from "react";
import { emptyStrings } from "strings/emptyStrings";
import ConnectionElement from "./ConnectionElement";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections || myConnections.length === 0) {
    return <EmptyItem text={emptyStrings.MY_CONNECTIONS} />;
  }

  return (
    <div className="pb-12">
      {myConnections.map((connection) => (
        <ConnectionElement key={connection._id} connection={connection} />
      ))}
    </div>
  );
};

export default Connections;

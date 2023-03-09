import EmptyItem from "components/UI/EmptyItem";
import React from "react";
import ConnectionElement from "./ConnectionElement";
import { EMPTY_STRINGS } from "appConstants";

const Connections = (props) => {
  const { myConnections } = props;

  if (!myConnections || myConnections.length === 0) {
    return <EmptyItem text={EMPTY_STRINGS.MY_CONNECTIONS} />;
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

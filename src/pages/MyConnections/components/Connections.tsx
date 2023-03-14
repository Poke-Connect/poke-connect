import React, { FC } from "react";
import { EMPTY_STRINGS } from "appConstants";
import EmptyItem from "components/UI/EmptyItem";
import { ConnectionElement } from ".";

interface IProps {
  myConnections: any;
}

const Connections: FC<IProps> = (props) => {
  const { myConnections } = props;

  if (!myConnections || myConnections.length === 0) {
    return <EmptyItem text={EMPTY_STRINGS.MY_CONNECTIONS} />;
  }

  return (
    <div className="pb-12">
      {myConnections.map((connection: any) => (
        <ConnectionElement key={connection._id} connection={connection} />
      ))}
    </div>
  );
};

export default Connections;

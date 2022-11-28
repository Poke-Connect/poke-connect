import React from "react";
import TileDetails from "./TileDetails";

const ConnectionsList = (props) => {
  const { connectionsdata } = props;
  return (
    <>
      {connectionsdata.map((data) => (
        <TileDetails
          key={data.id}
          displayName={data.displayName}
          photoURL={data.photoURL}
          location={data.location}
          timeDiff={data.timeDiff}
          time={data.time}
          onClickHandler={() => {}}
        />
      ))}
    </>
  );
};

export default ConnectionsList;

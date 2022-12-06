import React from "react";
import TileDetails from "../components/TileDetails";

const ConnectedConnectionsList = (props) => {
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
          distDiff={data.distDiff}
          timeStampRide={data.timeStampRide}
          onClickHandler={() => {}}
        />
      ))}
    </>
  );
};

export default ConnectedConnectionsList;

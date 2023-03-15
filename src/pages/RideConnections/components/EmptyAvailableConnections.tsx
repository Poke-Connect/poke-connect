import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const EmptyAvailableConnections: FC = () => {
  const navigate = useNavigate();
  const onLinkHandler = () => {
    navigate("/mytrips");
  };
  return (
    <div className="w-[100%] mt-10 pl-1 pr-2 text-typeText text-base font-medium">
      <p className=" ">Whoops, no matches found at the moment.</p>
      <p className=" pt-4">
        Don't forget to check back later for new matches! Just head to this trip
        in the{" "}
        <span className="text-primary underline" onClick={onLinkHandler}>
          My Trips
        </span>{" "}
        to see who's waiting for you.
      </p>
      <p className=" pt-4">Happy exploring!</p>
    </div>
  );
};

export default EmptyAvailableConnections;

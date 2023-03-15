import React, { FC } from "react";

const EmptyConnectedConnection: FC = () => {
  return (
    <div className="w-[100%] mt-10 pl-1 pr-2 text-typeText text-base font-medium">
      <p className=" ">Uh oh, no connections yet? </p>
      <p className=" pt-4">
        Head over to the <span className="text-primary">Available</span> tab and
        find some awesome matches to connect with!
      </p>
    </div>
  );
};

export default EmptyConnectedConnection;

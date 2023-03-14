import React, { FC } from "react";
import { createLocationString } from "helpers/utils";
import { COMMON_STRINGS } from "appConstants";

interface IProps {
  location: string;
  rideType: string;
  from: string;
}

const AddressElement: FC<IProps> = (props) => {
  const { location, rideType, from } = props;
  const locationDisplay = createLocationString(location);
  const { DESTINATION_RIDE } = COMMON_STRINGS;

  const styles =
    rideType === DESTINATION_RIDE ? "flex-col" : "flex flex-col-reverse";

  return (
    <div className={`info flex ${styles}  pl-1`}>
      <div className="flex justify-start">
        <p className="text-ellipsis overflow-hidden line-clamp-1 text-base font-normal">
          {locationDisplay}
        </p>
      </div>
      <div className="flex justify-start ">
        <p className="text-ellipsis overflow-hidden line-clamp-1 text-base">
          {from}
        </p>
      </div>
    </div>
  );
};

export default AddressElement;

import React from "react";
import { createLocationString } from "helpers/utils";
import { commonStrings } from "constants/commonStrings";

const AddressElement = (props) => {
  const { location, rideType } = props;
  const locationDisplay = createLocationString(location);
  const { KIA, DESTINATION_RIDE } = commonStrings;

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
          {KIA}
        </p>
      </div>
    </div>
  );
};

export default AddressElement;

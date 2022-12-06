import React from "react";
import { createLocationString } from "helpers/utils";

const KIA = "Kempegowda International Airport";
const DESTINATION_RIDE = "DESTINATION_RIDE";

const AddressElement = (props) => {
  const { location, rideType } = props;
  const locationDisplay = createLocationString(location);

  const styles =
    rideType === DESTINATION_RIDE ? "flex-col" : "flex flex-col-reverse";

  return (
    <div className={`info flex ${styles}`}>
      <div className="text-base  flex justify-start">{locationDisplay}</div>
      <div className="text-base  flex justify-start">{KIA}</div>
    </div>
  );
};

export default AddressElement;

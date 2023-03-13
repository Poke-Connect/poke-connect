import React, { FC } from "react";
import { COMMON_STRINGS } from "appConstants";
import { FixedInput, PlacesAutocomplete } from ".";
import { RideLine } from "components";

interface IProps {
  rideType: string;
  setLocationValue: Function;
  setFromValue: Function;
}

const AddressInputContainer: FC<IProps> = (props) => {
  const { rideType, setLocationValue, setFromValue } = props;
  const { DESTINATION_RIDE } = COMMON_STRINGS;

  return (
    <div className="flex flex-row w-full pl-2">
      <RideLine height={"m"} type={"newRide"} />
      <div
        className={`flex w-full ${
          rideType === DESTINATION_RIDE ? "flex-col" : "flex flex-col-reverse"
        }`}
      >
        <PlacesAutocomplete
          setLocationValue={setLocationValue}
          placeholder={
            rideType === DESTINATION_RIDE ? "From where?" : "Where to?"
          }
        />
        <FixedInput setFromValue={setFromValue} />
      </div>
    </div>
  );
};

export default AddressInputContainer;

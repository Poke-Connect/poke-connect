import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { toggleRideDiscoverability } from "api/ride";
import { useSocket } from "context/SocketContext";
import { TOAST_STRINGS } from "appConstants";
import { Switch } from "components";

interface IProps {
  discoverability: boolean;
  rideId: string;
}

const ToggleElement: FC<IProps> = (props) => {
  const { discoverability, rideId } = props;
  const { DISCOVERABILITY_SUCCESS_OFF, DISCOVERABILITY_SUCCESS_ON, ERROR } =
    TOAST_STRINGS;
  const socket = useSocket();

  const [toggleState, setToggleState] = useState<boolean>(discoverability);

  const onToggleHandler = async () => {
    try {
      if (toggleState) {
        toast.success(DISCOVERABILITY_SUCCESS_OFF);
      } else {
        toast.success(DISCOVERABILITY_SUCCESS_ON);
      }
      await toggleRideDiscoverability(rideId, !toggleState);
      if (socket) {
        socket.emit("ride-discoverability-toggle", { rideId: rideId });
      }
      setToggleState(!toggleState);
    } catch (e) {
      toast.error(ERROR);
    }
  };

  return (
    <div className="flex-col flex justify-center items-end pt-4">
      <Switch toggleState={toggleState} onToggleHandler={onToggleHandler} />
      <p className="text-xs text-typeText font-extralight italic">
        Discoverable
      </p>
    </div>
  );
};

export default ToggleElement;

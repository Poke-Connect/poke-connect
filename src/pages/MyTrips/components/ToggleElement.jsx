import React from "react";
import Switch from "components/Switch";

const ToggleElement = (props) => {
  const { discoverability, handleToggleChange } = props;
  return (
    <div className="flex-col flex justify-end items-end ">
      <Switch
        toggleState={discoverability}
        handleToggleChange={handleToggleChange}
      />
      <p className="text-xs text-typeText font-extralight italic">
        Discoverable
      </p>
    </div>
  );
};

export default ToggleElement;

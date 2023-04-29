import React, { FC } from "react";
import { COMMON_STRINGS } from "appConstants";

const WarningBar: FC = () => {
  return (
    <div className="bg-primary mb-8 w-full justify-center items-center flex-row">
      <h3 className="text-center font-medium text-white italic">
        {COMMON_STRINGS.WARNING_TEXT}
      </h3>
    </div>
  );
};

export default WarningBar;

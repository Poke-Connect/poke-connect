import React from "react";

const WARNING_TEXT = "CURRENTLY ONLY IN BANGALORE!";

const WarningBar = () => {
  return (
    <div className="bg-primary mb-8 w-full justify-center items-center flex-row">
      <h3 className="text-center font-medium text-white italic">🚕 {WARNING_TEXT} 🚕</h3>
    </div>
  );
};

export default WarningBar;

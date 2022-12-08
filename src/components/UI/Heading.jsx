import React from "react";

const Heading = ({ text }) => {
  return (
    <div id="heading" className="bg-white pt-3 flex flex-col ">
      <h2 className="text-2xl text-left font-semibold">{text}</h2>
    </div>
  );
};

export default Heading;

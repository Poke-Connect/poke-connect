import React, { FC } from "react";

const PokeHeading: FC = () => {
  return (
    <header className="flex flex-col bg-black text-white pt-2 border-b-8 border-primary pr-7 pl-9">
      <h1 className="pt-8 font-medium text-8xl">POKE</h1>
      <h4 className="text-2xl font-medium tracking-[.05em] pt-5 pb-4 mt-[-10px]">
        Connect via travel
      </h4>
    </header>
  );
};

export default PokeHeading;

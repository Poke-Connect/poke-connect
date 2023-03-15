import React, { FC } from "react";

const CopyRightFooter: FC = () => {
  return (
    <footer>
      <div className="bg-lightGray pt-4 px-6 text-sm font-light border-t-2 pb-6">
        <p>
          &copy; {new Date().getFullYear()} Poke Connect. All rights reserved.
        </p>
        <p className="pt-1">
          Designed with <span className="text-primary">🖤 </span> by Team Poke.
        </p>
      </div>
    </footer>
  );
};

export default CopyRightFooter;

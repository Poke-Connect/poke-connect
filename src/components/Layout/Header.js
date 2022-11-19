import React, { useState } from "react";
import Smiley from "../../assets/icons/smiley";
import Chat from "../../assets/icons/chat";
import { useLocation, Link } from "react-router-dom";
import RightSideNav from "./RightSideNav/RightSideNav";

const Header = () => {
  const location = useLocation().pathname !== "/about";
  const [sidebar, setSidebar] = useState(false);
  const showHideSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className=" bg-black flex items-center py-6">
        <span className="text-5xl font-bold text-left pl-5 flex-auto text-white">
          POKE
        </span>
        {location ? (
          <span className="flex-none pr-2">
            <Link to="/connections">
              <Chat />
            </Link>
          </span>
        ) : (
          ""
        )}
        {location ? (
          <span
            className="flex-none pr-4 cursor-pointer"
            onClick={showHideSidebar}
          >
            <Smiley />
          </span>
        ) : (
          ""
        )}
        <div>
          <RightSideNav sidebar={sidebar} onClick={showHideSidebar} />
        </div>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import Smiley from "../../../assets/icons/smiley";
import ChatIcon from "../../../assets/icons/ChatIcon";
import { useNavigate } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";
import IconElement from "./IconElement";
import { UserAuth } from "../../../context/AuthContext";

const Header = () => {
  const { logOut, user } = UserAuth();
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBar = () => setShowSidebar(!showSidebar);

  const navigate = useNavigate();

  const onHomeClickHandler = () => {
    navigate(`/home`);
  };

  const onChatClickHandler = () => {
    navigate(`/connections`);
  };

  const onProfieClickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className=" bg-black flex items-center py-6 fixed left-0 right-0 top-0 max-w-xl mx-auto">
        <span
          className="text-5xl font-bold text-left pl-5 flex-auto text-white"
          onClick={onHomeClickHandler}
        >
          POKE
        </span>
        <IconElement Icon={ChatIcon} onClickHandler={onChatClickHandler} />
        <IconElement Icon={Smiley} onClickHandler={onProfieClickHandler} />
        <div>
          <RightSideNav
            showSidebar={showSidebar}
            toggleSideBar={toggleSideBar}
            logOut={logOut}
            displayName={user?.displayName}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

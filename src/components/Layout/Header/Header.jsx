import React, { useState } from "react";
import ChatIcon from "assets/icons/ChatIcon";
import { useNavigate } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";
import IconElement from "./IconElement";
import { UserAuth } from "context/AuthContext";
import ProfileIcon from "./ProfileIcon";

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
    <div className=" bg-black flex items-center py-6 left-0 right-0 top-0 max-w-xl mx-auto z-50  w-screen justify-between">
      <div>
        <span
          className="text-5xl font-bold text-left pl-5  text-white "
          onClick={onHomeClickHandler}
        >
          POKE
        </span>
      </div>
      <div className="flex flex-row justify-end items-center right-0 absolute mr-7">
        <IconElement Icon={ChatIcon} onClickHandler={onChatClickHandler} />
        <ProfileIcon
          photoURL={user?.photoURL}
          displayName={user?.displayName}
          onClickHandler={onProfieClickHandler}
        />
      </div>
      <div >
        <RightSideNav
          showSidebar={showSidebar}
          toggleSideBar={toggleSideBar}
          logOut={logOut}
          displayName={user?.displayName}
        />
      </div>
    </div>
  );
};

export default Header;

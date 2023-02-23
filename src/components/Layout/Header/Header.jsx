import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";
import ConnectionsIcon from "./ConnectionsIcon";
import { UserAuth } from "context/AuthProvider";
import ProfileIcon from "./ProfileIcon";
import { signout } from "helpers/helpersAuth";

const Header = () => {
  const { user } = UserAuth();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSideBar = () => setShowSidebar(!showSidebar);

  const navigate = useNavigate();

  const onHomeClickHandler = () => {
    navigate(`/home`);
  };

  const onProfieClickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const onSignOutHandler = () => {
    toggleSideBar();
    signout();
    navigate("/signin");
  };

  return (
    <div className=" bg-black flex items-center py-6 left-0  top-0  z-50  w-full justify-between">
      <div>
        <span
          className="text-5xl font-bold text-left pl-5  text-white "
          onClick={onHomeClickHandler}
        >
          POKE
        </span>
      </div>
      <div className="flex flex-row justify-end items-center right-0 absolute mr-7 ">
        <ConnectionsIcon />
        <ProfileIcon
          photoURL={user?.photoURL}
          displayName={user?.displayName}
          onClickHandler={onProfieClickHandler}
        />
      </div>
      <div className="overflow-y-scroll">
        <RightSideNav
          showSidebar={showSidebar}
          toggleSideBar={toggleSideBar}
          logOut={onSignOutHandler}
          displayName={user?.displayName}
          selfId={user?._id}
        />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import NavElement from "./NavElement";
import { useNavigate } from "react-router-dom";
import { capitaliseName } from "helpers/utils";

const RightSideNav = (props) => {
  const { showSidebar, toggleSideBar, logOut, displayName } = props;
  const navigate = useNavigate();

  const onLogOutPressHandler = async () => {
    toggleSideBar();
    try {
      await logOut();
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
  };

  const navElements = [
    {
      title: "Find New Connection",
      toRoute: "/home",
      onClickHandler: toggleSideBar,
      styles: "",
    },
    {
      title: "My Trips",
      toRoute: "/mytrips",
      onClickHandler: toggleSideBar,
      styles: "",
    },
    {
      title: "My Connections",
      toRoute: "/connections",
      onClickHandler: toggleSideBar,
      styles: "",
    },
    {
      title: "My Profile",
      toRoute: "/profile",
      onClickHandler: toggleSideBar,
      styles: "",
    },
    {
      title: "About",
      toRoute: "/about",
      onClickHandler: toggleSideBar,
      styles: "",
    },
    {
      title: "Log Out",
      toRoute: "/signin",
      onClickHandler: onLogOutPressHandler,
      styles: "",
    },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 h-full z-50 overflow-y-scroll pb-10 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }  ease-in-out duration-200`}
    >
      <ul className="flex flex-col  absolute  h-full w-3/4 bg-white top-0 right-0  pl-5 pr-8 pt-20 pb-10 font-bold text-xl items-end overflow-y-scroll">
        <div className="pb-5 ">
          <p className="text-right">Hello, {capitaliseName(displayName)}</p>
        </div>
        {navElements.map((navElement) => (
          <NavElement
            key={navElement.title}
            title={navElement.title}
            toRoute={navElement.toRoute}
            onClickHandler={navElement.onClickHandler}
            styles={navElement.styles}
          />
        ))}
      </ul>
      <button
        className="absolute top-0 left-0 bottom-0 w-1/4 bg-white focus:outline-none focus:shadow-none opacity-20"
        onClick={toggleSideBar}
      ></button>
    </nav>
  );
};
export default RightSideNav;

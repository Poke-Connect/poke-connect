import React from "react";
import NavElement from "./NavElement";
import { useNavigate } from "react-router-dom";

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
    <>
      {showSidebar ? (
        <nav className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10 ${sidebar ? 'translate-x-0':'translate-x-full'}">
          <ul className="{`flex flex-col gap-5 absolute bg-lightGreen h-full w-3/4 top-0 right-0 bottom-0 px-5 pt-24 font-bold text-xl z-10 `}">
            <div className="pb-5">
              <p>Hello, {displayName}</p>
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
            className="absolute top-0 left-0 bottom-0 w-1/4"
            onClick={toggleSideBar}
          ></button>
        </nav>
      ) : null}
    </>
  );
};
export default RightSideNav;

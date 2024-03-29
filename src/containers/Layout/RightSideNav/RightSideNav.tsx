import React, { FC } from "react";
import NavElement from "./NavElement";
import { getFirstName } from "helpers/utils";
import { useNavigate } from "react-router-dom";

interface IProps {
  showSidebar: boolean;
  toggleSideBar: () => void;
  logOut: Function;
  displayName: string;
  selfId: string;
}

const RightSideNav: FC<IProps> = (props) => {
  const { showSidebar, toggleSideBar, logOut, displayName, selfId } = props;
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
    },
    {
      title: "My Trips",
      toRoute: "/mytrips",
      onClickHandler: toggleSideBar,
    },
    {
      title: "My Connections",
      toRoute: "/connections",
      onClickHandler: toggleSideBar,
    },
    {
      title: "My Profile",
      toRoute: `/user/${selfId}`,
      onClickHandler: toggleSideBar,
    },
    {
      title: "About",
      toRoute: "/about",
      onClickHandler: toggleSideBar,
    },
    {
      title: "Log Out",
      toRoute: "/signin",
      onClickHandler: onLogOutPressHandler,
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
          <p className="text-right">Hello, {getFirstName(displayName)}</p>
        </div>
        {navElements.map((navElement) => (
          <NavElement
            key={navElement.title}
            title={navElement.title}
            toRoute={navElement.toRoute}
            onClickHandler={navElement.onClickHandler}
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

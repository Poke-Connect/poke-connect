import React, { useState } from "react";
import Chat from '../../assets/icons/chat'
import { useLocation,Link } from "react-router-dom";
import RightSideNav from "./RightSideNav/RightSideNav";
const Header = () => {
  const location = useLocation().pathname !== "/about";
  const [sidebar, setSidebar] = useState(false);
  const showHideSidebar = () => setSidebar(!sidebar);
  return <>
    <div className=" bg-black flex items-center py-6 fixed left-0 right-0 top-0 max-w-xl mx-auto"><span className="text-5xl font-bold text-left pl-5 flex-auto text-white">POKE</span>
     {location?<span className="flex-none mr-4"><Link  to="/connections"><Chat/></Link></span>:''}
     {location?<span className="flex-none mr-4 cursor-pointer profile-pic" onClick={showHideSidebar}></span>:''}
     <div><RightSideNav sidebar={sidebar} onClick={showHideSidebar} /></div>
    </div>
    
  </>;
};

export default Header;

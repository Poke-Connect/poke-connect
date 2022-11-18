const RightSideNav = ({sidebar , onClick}) => {
  return (
    <>
    {sidebar?
    <nav className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10 ${sidebar ? 'translate-x-0':'translate-x-full'}">
      <ul className="{`flex flex-col gap-5 absolute bg-lightGreen h-full w-3/4 top-0 right-0 bottom-0 px-5 pt-24 font-bold text-xl z-10 `}">
        <li className=" border-t border-b border-black py-5">
          <a href="/connections/new">Find New Connection</a>
        </li>
        <li className="border-b border-black py-5">
          <a href="/mytrips">My Trips</a>
        </li>
        <li className="border-b border-black py-5">
          <a href="/connections">My Connections</a>
        </li>
        <li className="border-b border-black py-5">
          <a href="/profile">My Profile</a>
        </li>
        <li className="border-b border-black py-5">
          <a href="#">Log Out</a>
        </li>
      </ul>
      <button className="absolute top-0 left-0 bottom-0 w-1/4" onClick={onClick}>
        
      </button>

    </nav>
    :''
    }
    {/* <div className="rightsidenav-position-absolute bg-lightGreen h-full" >RightSideNav</div> */}
  
    </>
  )    
}
export default RightSideNav
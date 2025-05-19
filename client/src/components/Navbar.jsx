import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser.js"
import { BellIcon, LogOutIcon, Rainbow } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
import useLogout from "../hooks/useLogout.js";
import useInScreenType from "../hooks/useInScreenType.jsx";


const Navbar = () => {
  const {authUser}=useAuthUser();
  const location=useLocation();
  const isChatPage=location.pathname?.startsWith("/chat");
  const isFriendPage=location.pathname?.startsWith("/friends");
  const isNotifPage=location.pathname?.startsWith("/notifications");
  const inMobile=useInScreenType();
  const {logoutMutation}=useLogout();
  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-end w-full">
            {/* Logo, only  in chat page */}
            {(isChatPage||(isChatPage&&inMobile))&&(
              <div>
                <Link to="/" className="flex items-center gap-2.5">
                  <Rainbow className="size-12 text-primary"/>
                  <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                    VibeCall

                  </span>
                </Link>
              </div>
            )}
            {(inMobile&&(isFriendPage||isNotifPage))&&(
              <div>
                <Link to="/" className="flex items-center gap-0">
                  <Rainbow className="size-9 text-primary"/>
                  <span className="text-xl font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                    VibeCall

                  </span>
                </Link>
              </div>
            )}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              <Link to={"/notifications"}>
                <button className="btn btn-ghost btn-circle">
                    <BellIcon className="size-6 to-base-content opacity-70"/>
                </button>
              </Link> 
            </div>

            <ThemeSelector/>
            <div className="avatar">
              <div className="w-9 rounded-full mx-auto">
                <img src={authUser?.profilePic} alt="User avatar" rel="noreferrer"/>
              </div>
            </div>

            {/* Logout button */}
            {!isChatPage&&<button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70"/>
            </button>}
        </div>
        
      </div>
    </nav>

  )
}

export default Navbar

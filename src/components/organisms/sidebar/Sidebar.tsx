/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Logout from "@/components/organisms/SignAndLog/Logout/Logout";

type Props = { userInfo: any };

function Sidebar({ userInfo }: Props) {
  const currentUser: string = "clint";
  const [logout, setLogout] = useState<boolean>(false);

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          alt=" "
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>

      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {userInfo && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Twitter Blue" Icon={CheckCircleIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>

      {/* Button */}

      {currentUser ? (
        <>
          {userInfo && (
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
              Tweet
            </button>
          )}

          {/* Mini-Profile */}

          <div className="hoverEffect mb-7  text-gray-700 flex items-center justify-center xl:justify-start mt-auto relative">
            {userInfo && logout && (
              <Logout
                userInfo={userInfo}
                logoutStateVar={logout}
                logoutStateFxn={setLogout}
              />
            )}
            <Image
              src={userInfo?.photoURL}
              width="50"
              height="50"
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
              onClick={() => setLogout((prev) => !prev)}
            />
            <div
              className="leading-5 hidden xl:inline"
              onClick={() => setLogout((prev) => !prev)}
            >
              <h4 className="font-bold">{userInfo?.displayname}</h4>
              <p className="text-gray-500">{userInfo?.email}</p>
            </div>
            <DotsHorizontalIcon
              className="h-5 xl:ml-8 hidden xl:inline"
              onClick={() => setLogout((prev) => !prev)}
            />
          </div>
        </>
      ) : (
        <button className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Sign in
        </button>
      )}
    </div>
  );
}

export default Sidebar;

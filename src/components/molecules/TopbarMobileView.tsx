/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
type Props = { userInfo: any };
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Sidebar from "../organisms/sidebar/Sidebar";
import MobileSideBar from "../organisms/mobilesidebar/MobileSideBar";

export default function TopbarMobileView({ userInfo }: Props) {
  const [sideBarPosition, setSideBarPosition] = useState('-300px');
  

  const openSideBar = () => {
    if (sideBarPosition === '0px') {
      setSideBarPosition('-300px');
    } else {
      setSideBarPosition('0px');
     }
  }
  const sideBarStyle = {
    transform:`translateX(${sideBarPosition})`,
    transition: 'all ease-in 0.2s',
    position: 'absolute',
    background: 'white'
  }
  
  return (
    <div className="topNavMobile">
      <div className="flex border-gray-200 p-3 space-x-3">
        {userInfo?.uid ? <img
          src={userInfo?.photoURL}
          alt="tell"
          className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer mr-2"
          onClick={openSideBar}
        /> : <div />
        }
        <div className="w-full divide-y divide-gray-200">
          <Image
            alt=" "
            width="50"
            height="50"
            className="ml-24"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          ></Image>
        </div>
      </div>
    </div>
  );
}
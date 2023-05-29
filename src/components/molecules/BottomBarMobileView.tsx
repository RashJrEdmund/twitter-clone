/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
  SearchIcon,
} from "@heroicons/react/outline";

type Props = {};
export default function BottomBarMobileView({}: Props) {
  return (
    <div className="bottomNavMobile">
    <div className="flex border-gray-200 p-3 space-x-3 fixed bottom-0 justify-between bg-white w-full px-8" >
      <HomeIcon className="h-8"/>
      <SearchIcon className="h-8"/>
      <BellIcon className="h-8"/>
      <InboxIcon className="h-8"/>
    </div>
    </div>
  );
}
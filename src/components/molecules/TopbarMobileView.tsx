/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
type Props = {};
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function TopbarMobileView({}: Props) {
  return (
    <div className="topNavMobile">
    <div className="flex border-gray-200 p-3 space-x-3">
      <img
        src="https://pbs.twimg.com/profile_images/1602579156574814209/CypHsydl_400x400.png"
        alt="tell"
        className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer mr-2"
      />

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
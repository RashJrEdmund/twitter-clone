import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = { post: any };

export default function Feed_post_section({ post }: Props) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        src={post.userImg}
        alt="user_image"
        className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer mr-4"
      />
      <div className="">
        {/* right- side */}
        <div>
          {/*header  */}
          <div>
            {/* post info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                  {post.name}
                </h4>
                <span className="text-sm sm:text-[15px]">
                  {" "}
                  @{post.username} -{" "}
                </span>
                <span className="text-sm sm:text-[15px] hover:underline ">
                  {post.timestamp}
                </span>
              </div>

              {/* dot icon */}
              <EllipsisHorizontalIcon className="h-10 hoverEffect cursor-pointer hover:bg-sky-100 hover:text-sky-500 p-2 rounded-full w-10" />
            </div>

            {/* post text */}
            <p className="text-gray-800 text-[15px sm:text-[16] mb-2">
              {post.text}
            </p>
            {/* post image */}
            <img className="rounded-2xl mr-2" src={post.img} alt="img" />
            {/* icons */}
            <div className="flex items-center justify-between text-gray-500 p-2">
              <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full" />
              <TrashIcon className="h-9 w-9 hoverEffect  p-2  hover:bg-red-100 hover:text-red-500 rounded-full" />
              <HeartIcon className="h-9 w-9 hoverEffect  p-2 hover:bg-red-100 hover:text-red-500 rounded-full" />
              <ShareIcon className="h-9 w-9 hoverEffect p-2  hover:bg-sky-100 hover:text-sky-500 rounded-full" />
              <ChartBarIcon className="h-9 w-9 hoverEffect  p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

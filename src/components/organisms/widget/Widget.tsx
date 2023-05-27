import { SearchIcon } from "@heroicons/react/outline/";
import News from "../news/News";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthGaurd from "@/HOC/AuthGaurd";
import SignWidget from "@/components/SignWidget/SignWidget";
type Props = {};

function Widget({ userInfo }: Props) {
  React.useEffect(() => {
    console.log("this userinfo in widget", userInfo);
  }, []);
  return (
    <>
      {userInfo ? (
        <div className="xl:w-[500px] hidden lg:inline ml-10 space-y-5">
          <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full border-gray-100 relative">
              <SearchIcon className="h-5 z-50 text-gray-500" />
              <input
                className="absolute inset-0 rounded-full pl-11 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 "
                type="text"
                placeholder="Search Twitter"
              />
            </div>
          </div>

          <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Trends for you</h4>
            <AnimatePresence>
              <News
                header={"Trending in Cameroon"}
                trend={"#Clint"}
                tweetCount={"998K"}
              />
            </AnimatePresence>
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
              Show more
            </button>
          </div>
          <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Who to follow</h4>
            <AnimatePresence></AnimatePresence>
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
              Show more
            </button>
          </div>
        </div>
      ) : (
        <SignWidget />
      )}
    </>
  );
}

export default AuthGaurd(Widget);

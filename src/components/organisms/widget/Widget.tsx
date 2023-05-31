/* eslint-disable @next/next/no-img-element */

import { SearchIcon } from "@heroicons/react/outline/";
import News from "../news/News";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignWidget from "@/components/organisms/SignWidget/SignWidget";

type Props = {
  userInfo: any;
};

function Widget({ userInfo }: Props) {
  const randomUserPic: string =
    "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const randomUserUsername: string = "givensjames";
  const randomUserFirstName: string = "Che";
  const randomUserLastName: string = "Hope";
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <News
                  header={"Trending in Cameroon"}
                  trend={"#Clint"}
                  tweetCount={"998K"}
                />
              </motion.div>
            </AnimatePresence>
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400">
              Show more
            </button>
          </div>
          <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Who to follow</h4>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  // key={randomUser.login.username}
                  className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
                >
                  <img
                    className="rounded-full image-cover"
                    width="40"
                    src={randomUserPic}
                    alt=""
                  />
                  <div className="truncate ml-4 leading-5">
                    <h4 className="font-bold hover:underline text-[14px] truncate">
                      {randomUserFirstName + " " + randomUserLastName}
                    </h4>
                    <h5 className="text-[13px] text-gray-500 truncate">
                      @{randomUserUsername}
                    </h5>
                  </div>
                  <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                    Follow
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
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

export default Widget;

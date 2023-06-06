import Feed_header from "@/components/atoms/feed-header";
import NewTweetMobile from "@/components/atoms/NewTweetMobile";
import BottomBarMobileView from "@/components/molecules/BottomBarMobileView";
import Input_feed_section from "@/components/molecules/Input_feed_section";
import TopbarMobileView from "@/components/molecules/TopbarMobileView";
import Feed_post_section from "./Feed_post_section";
import { Key, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/configs/firebase";
import { AnimatePresence, motion } from "framer-motion";

type Props = { userInfo: any };

function Feed_section({ userInfo }: Props) {
  console.log(userInfo);

  const [posts, setPost] = useState<any>([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "tweet"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPost(snapshot.docs);
      }
    );
  }, []);

  return (
    <>
      {userInfo?.uid ? (
        <div className="xl:ml-[350px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <TopbarMobileView userInfo={userInfo} />
          <Feed_header />
          <div className="newPostDiv">
          <Input_feed_section />
          </div>
          <AnimatePresence>
            {posts.map((post: any) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Feed_post_section
                  userInfo={userInfo}
                  key={post.id}
                  post={post}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          { userInfo?.uid?              
       <NewTweetMobile/> : <div /> }
      <BottomBarMobileView />
        </div>
      ) : (
        <div className="xl:ml-[350px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
         
         <Feed_header />
          {posts.map((post: any) => (
            <Feed_post_section userInfo={userInfo} key={post.id} post={post} />
          ))}  
          
        </div>
      )}
    </>
  );

}

export default Feed_section;

import Feed_header from "@/components/atoms/feed-header";
import NewTweetMobile from "@/components/atoms/NewTweetMobile";
import BottomBarMobileView from "@/components/molecules/BottomBarMobileView";
import Input_feed_section from "@/components/molecules/Input_feed_section";
import TopbarMobileView from "@/components/molecules/TopbarMobileView";
import Feed_post_section from "./Feed_post_section";
import { Key, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/configs/firebase";

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
    <div className="xl:ml-[350px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <TopbarMobileView />
      <Feed_header />
      <Input_feed_section />
      {posts.map((post: any) => (
        <Feed_post_section key={post.id} post={post} userInfo={undefined} />
      ))}
      <NewTweetMobile />
      <BottomBarMobileView />
    </div>
  )
}

export default Feed_section;

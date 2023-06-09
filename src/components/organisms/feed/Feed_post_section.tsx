/* eslint-disable @next/next/no-img-element */
import { db, storage } from "@/configs/firebase";
import {
  ChartBarIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { ChatIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../../../Atoms/AtomsModal";

type Props = { post: any; userInfo: any };

export default function Feed_post_section({ post, userInfo }: Props) {
  const [likes, setLikes] = useState<any>([]);
  const [liked, setLiked] = useState<Boolean>(false);
  const [comments, setComments] = useState<any>([]);
  const [open, setOpen] = useRecoilState<any>(modalState);
  const [postId, setPostId] = useRecoilState<any>(postIdState);
  /* like a tweet */
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tweet", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [post.id]);

  /* COMMENT a tweet*/

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tweet", post.id, "comments"),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db]);

  /* remove like or add if exists or not */
  useEffect(() => {
    setLiked(
      likes.findIndex((like: { id: any }) => like.id === userInfo?.uid) !== -1
    );
  }, [likes]);

  /* sendin like to firestore */
  async function likePost() {
    if (userInfo) {
      if (liked) {
        await deleteDoc(doc(db, "tweet", post.id, "likes", userInfo?.uid));
      } else {
        await setDoc(doc(db, "tweet", post.id, "likes", userInfo?.uid), {
          userName: userInfo.displayname,
        });
      }
    } else {
    }
  }



  // deletePost function

  function deletePost() {
    if (window.confirm("Are you Sure you want to delete?")) {
      deleteDoc(doc(db, "tweet", post.id));
      if (post.data().image) {
        deleteObject(ref(storage, `tweet/${post.id}/image`));
      }
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200  hover:bg-gray-50">
      {/* user image */}
      {post?.data().userImg && (
        <img
          src={post?.data().userImg}
          alt="user_image"
          className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer mr-4"
        />
      )}
      <div className="flex-1">
        {/* right- side */}
        <div className="w-full">
          {/*header  */}
          <div>
            {/* post info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                  {post?.data().userName}
                </h4>
                <span className="text-sm sm:text-[15px] text-gray-500">
                  {" "}
                  @{post.data().name} -{" "}
                </span>
                <span className="text-sm sm:text-[15px] hover:underline text-gray-500">
                  <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
                </span>
              </div>

              {/* dot icon */}
              <DotsHorizontalIcon className="h-10 hoverEffect cursor-pointer hover:bg-sky-100 hover:text-sky-500 p-2 rounded-full w-10" />
            </div>

            {/* post text */}
            <p className="text-gray-800 text-[15px sm:text-[16] mb-2 ">
              {post.data().text}
            </p>
            {/* post image */}
            {post.data().image && (
              <img
                className="rounded-2xl mr-2"
                src={post.data().image}
                alt="img"
              />
            )}
            {/* icons */}
             <div className="flex items-center justify-between text-gray-500 p-2">
              <div className="flex items-center
              ">
              <ChatIcon
                onClick={() => {
                  if (userInfo) {
                    setPostId(post.id);
                    setOpen(!open);
                  }
                }}
                className="h-9 w-9 hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full"
              />
              {comments.length > 0 && (
                  <span className={`text-sm`}>
                    {comments.length}
                  </span>
                )}
              </div>
              
              {post.data().id === userInfo?.uid && (
                <TrashIcon
                  onClick={deletePost}
                  className="h-9 w-9 hoverEffect  p-2  hover:bg-red-100 hover:text-red-500 rounded-full"
                />
              )}

              <div className="flex items-center">
                {liked ? (
                  <HeartIconFilled
                    onClick={likePost}
                    className="h-9 w-9 hoverEffect  p-2 hover:bg-red-100 text-red-500 rounded-full"
                  />
                ) : (
                  <HeartIcon
                    onClick={likePost}
                    className="h-9 w-9 hoverEffect  p-2 hover:bg-red-100 hover:text-red-500 rounded-full"
                  />
                )}
                {likes.length > 0 && (
                  <span className={`${liked && "text-red-600"}`}>
                    {likes.length}
                  </span>
                )}
              </div>
              <ShareIcon className="h-9 w-9 hoverEffect p-2  hover:bg-sky-100 hover:text-sky-500 rounded-full" />
              <ChartBarIcon className="h-9 w-9 hoverEffect  p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

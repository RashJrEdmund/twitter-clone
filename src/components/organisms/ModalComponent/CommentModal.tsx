/* eslint-disable @next/next/no-img-element */
"use client";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../../../Atoms/AtomsModal";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/configs/firebase";
import Moment from "react-moment";
import {
  EmojiHappyIcon,
  GiftIcon,
  PhotographIcon,
} from "@heroicons/react/outline";

type Props = { userInfo: any };

const CommentModal = ({ userInfo }: Props) => {
  const [open, setOpen] = useRecoilState<any>(modalState);
  const [postId, setPostId] = useRecoilState<any>(postIdState);
  const [input, setInput] = useState<string>("");
  const [post, setPost] = useState<any>({});

  //getting information from firestore for comment part
  useEffect(() => {
    onSnapshot(doc(db, "tweet", postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId, db]);

  console.log(userInfo?.photoURL);



  function sendComment() {}

  return (
    <div>
      <h1>cool</h1>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%] absolute top-32 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-100 rounded-xl shadow-md "
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div className="hoverEffect w-9 h-9 flex items-center justify-center ">
                <XIcon
                  className="h-[20px] text-gray-700"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="p-2 flex items-center space-x-1 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300"></span>
              {post?.data()?.userImg && (
                <img
                  src={post?.data()?.userImg}
                  alt="user_image"
                  className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer mr-4"
                />
              )}
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post?.data()?.userName}
              </h4>

              <span className="text-sm sm:text-[15px] text-gray-500">
                {" "}
                @{post?.data()?.name} -{" "}
              </span>
              <span className="text-sm sm:text-[15px] hover:underline text-gray-500">
                <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
              </span>
            </div>
            <p className="text-gray-500 text-[15px]  sm:text-[16px] ml-16 mb-2">{post?.data()?.text}</p>
            <div className={`flex p-3 space-x-3 `}>
              <img
                src={userInfo?.photoURL}
                alt="tell"
                className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer"
              />

              <div className="w-full">
                <div className="">
                  <textarea
                    rows={2}
                    placeholder="Tweet your reply!"
                    className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                  {/* {selectedFile && (
                    <div className="relative">
                      <XIcon
                        className="h-7 absolute cursor-pointer text-white bg-black rounded-full shadow-md shadow-white"
                        onClick={() => setSelectedFile(null)}
                      />
                      <img src={selectedFile} alt="tweet image" />
                    </div>
                  )} */}
                </div>
                <div className="w-full flex justify-between pt-2.5">
                  <>
                    <div className="flex">
                      <PhotographIcon
                        className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full"
                        /*  onClick={() => filepick.current.click()} */
                      />
                      {/*  <input
                        type="file"
                        ref={filepick}
                        onChange={addImageToPost}
                        hidden
                      /> */}
                      <GiftIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
                      <EmojiHappyIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
                    </div>
                    <button
                      disabled={!input.trim()}
                      onClick={sendComment}
                      className=" w-20 h-10 bg-blue-500 p-2 text-white rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-75 cursor-pointer"
                    >
                      Reply
                    </button>
                  </>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default CommentModal;

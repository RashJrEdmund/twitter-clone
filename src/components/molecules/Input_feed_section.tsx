/* eslint-disable @next/next/no-img-element */
type Props = { userInfo: any };
import AuthGaurd from "@/HOC/AuthGaurd";
import { db, storage } from "@/configs/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "@firebase/firestore";
// import { FaceSmileIcon, GifIcon, PhotoIcon } from "@heroicons/react/24/outline";
import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { GiftIcon } from "@heroicons/react/solid";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import { useRef, useState } from "react";

function Input_feed_section({ userInfo }: Props) {
  const [input, setInput] = useState<string>("");
  const filepick = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const sendPost = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "tweet"), {
      id: userInfo?.uid,
      text: input,
      /*       name: userInfo?.name, */
      userName: userInfo?.displayname,
      email: userInfo?.email,
      timestamp: serverTimestamp(),
    });
    setInput("");
    setSelectedFile(null);
    setIsLoading(false);

    /*    const imageRef = ref(storage, ) */
    const imageRef = ref(storage, `tweet/${docRef.id}/image`);
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "tweet", docRef.id), {
          image: downloadUrl,
        });
      });
      console.log(docRef, input);
    }
    /*     const uploadTask = uploadBytesResumable(imageRef, selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    ); */
  };

  const addImageToPost = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: any) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div
      className={`flex border-b border-gray-200 p-3 space-x-3 ${
        isLoading && "animate-pulse"
      } `}
    >
      <img
        src={userInfo.photoURL}
        alt="tell"
        className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer"
      />

      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            rows={2}
            placeholder="What is happening?!"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          {selectedFile && (
            <div className="relative">
              <XIcon
                className="h-7 absolute cursor-pointer text-white bg-black rounded-full shadow-md shadow-white"
                onClick={() => setSelectedFile(null)}
              />
              <img src={selectedFile} alt="tweet image" />
            </div>
          )}
        </div>
        <div className="w-full flex justify-between pt-2.5">
          {!isLoading && (
            <>
              <div className="flex">
                <PhotographIcon
                  className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full"
                  onClick={() => filepick.current.click()}
                />
                <input
                  type="file"
                  ref={filepick}
                  onChange={addImageToPost}
                  hidden
                />
                <GiftIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
                <EmojiHappyIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
                {/*             <PhotographIcon className="h-10 w-10 hoverEffect  cursor-pointer p-2 text-sky-500 hover:text-sky-100" />
            <PhotoIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
            <GifIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
            <FaceSmileIcon className="h-10 w-10  cursor-pointer p-2 text-sky-500 hover:text-sky-500 hover:bg-sky-100 rounded-full" />
            {/*             <PhotographIcon className="h-10 w-10 hoverEffect  cursor-pointer p-2 text-sky-500 hover:text-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect cursor-pointer p-2 text-sky-500 hover:text-sky-100" /> */}
              </div>
              <button
                disabled={!input.trim()}
                onClick={sendPost}
                className=" w-20 h-10 bg-blue-500 p-2 text-white rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-75 cursor-pointer"
              >
                Tweet
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthGaurd(Input_feed_section);

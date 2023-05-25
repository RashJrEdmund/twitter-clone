/* eslint-disable @next/next/no-img-element */
type Props = {};
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input_feed_section({}: Props) {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp"
        alt="tell"
        className="h-11  w-11 rounded-full hover:brightness-95 cursor-pointer"
      />

      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            rows={2}
            placeholder="What is happening?!"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
          ></textarea>
        </div>
        <div className="w-full flex justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect  cursor-pointer p-2 text-sky-500 hover:text-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect cursor-pointer p-2 text-sky-500 hover:text-sky-100" />
          </div>
          <button className="bg-blue-400 p-2 text-white rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-95">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

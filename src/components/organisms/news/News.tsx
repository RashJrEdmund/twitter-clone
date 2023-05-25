import { DotsHorizontalIcon } from "@heroicons/react/outline";

/* eslint-disable @next/next/no-img-element */
type Props = { trend: any, header: string, tweetCount: string };

export default function News({ header, trend, tweetCount }: Props) {
  return (
    <div className="flex items-center justify-between hover:bg-gray-200 transition duration-500 ease-out" >
    <div className="" style={{fontSize: '15px'}}>
    <div className="flex items-center justify-between px-4 py-2 space-x-1 ">
        <div className="space-y-0.5">
          <p className="font-medium text-gray-500">
          {header}
          </p>
          <h6 className=" font-bold">{trend}</h6>
          <p className=" font-medium text-gray-500">
          {tweetCount} Tweets
          </p>
        </div>
      </div>
    </div>
    {/* dot icon */}
    <DotsHorizontalIcon className="h-10 hoverEffect cursor-pointer hover:bg-sky-100 hover:text-sky-500 p-2 rounded-full w-10" />
  </div>
  );
}
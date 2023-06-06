import { SparklesIcon } from "@heroicons/react/outline";
type Props = {};

export default function Feed_header({}: Props) {
  return (
    <div className=" px-3 py-5 mb-7 border-b border-gray-200 sticky top-0 z-50  backdrop-blur-lg">
      <div className="flex">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5 " />
        </div>
      </div>

      <div className="flex justify-around  py-1 ">
        <div className=" hover:bg-gray-100 relative ">
          <p className="font-semibold py-0">For you</p>
          <p className="border-b-4 border-sky-500  " />
        </div>

        <p className="text-gray-500">Following</p>
      </div>
    </div>
  );
}

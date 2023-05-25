import { SparklesIcon } from "@heroicons/react/outline";
type Props = {};

export default function Feed_header({}: Props) {
  return (
    <div className="flex px-3 py-5 border-b border-gray-200 sticky top-0 z-50  backdrop-blur-md ">
      <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
        <SparklesIcon className="h-5 " />
      </div>
    </div>
  );
}

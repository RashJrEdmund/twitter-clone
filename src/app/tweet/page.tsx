'use client';

import Input_feed_section from "@/components/molecules/Input_feed_section";
import { ArrowLeftIcon, BackspaceIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";

function Tweet() {
  const router = useRouter();
  const handleClick = () => {
     router.push('/');
  }

  return (
    <div>
      <div className="flex h-10 pt-8 pb-8">
       <ArrowLeftIcon className="hoverEffect h-5 text-sky-500" onClick={handleClick} />
      </div>
    <Input_feed_section />
    </div>
  )
}

export default Tweet
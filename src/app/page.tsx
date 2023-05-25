'use client';
import Feed_section from "@/components/organisms/feed/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";

type Props = {};
export default function Home({}: Props) {
  return (
    <div className="flex min-h-screen max-w-10xl mx-auto justify-center">
      <div className="hidden sm:flex flex-col p-2 xl:items-start sticky h-full xl:ml-24">
      <Sidebar />
      </div>    
     <Feed_section />
     <Widget />
    </div>
  );
}

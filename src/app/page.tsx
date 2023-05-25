'use client';
import Feed_section from "@/components/organisms/feed/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";

type Props = {};
export default function Home({}: Props) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
     <Sidebar />
     <Feed_section />
     <Widget />
    </div>
  );
}

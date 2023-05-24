'use client';

import Feed from "@/components/atoms/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";

type Props = {};
export default function Home({}: Props) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
     <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

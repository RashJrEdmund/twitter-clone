"use client";

import Footer from "@/components/organisms/Footer/Footer";
import Feed_section from "@/components/organisms/feed/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";
import { AuthContextProvider, useAuth } from "@/hooks/AuthContext";

type Props = {};

export default function Home({}: Props) {
  const { currentUser } = useAuth();

  return (
    <AuthContextProvider>
      <div className="flex min-h-screen max-w-10xl mx-auto justify-center">
        <div className="hidden sm:flex flex-col p-2 xl:items-start sticky h-full xl:ml-24">
          <Sidebar />
        </div>
        <Feed_section />
        <Widget />

        {!currentUser && <Footer />}
      </div>
    </AuthContextProvider>
  );
}

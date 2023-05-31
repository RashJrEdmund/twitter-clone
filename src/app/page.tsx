"use client";

import AuthGaurd from "@/HOC/AuthGaurd";
import Footer from "@/components/organisms/Footer/Footer";
import Feed_section from "@/components/organisms/feed/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";
import { AuthContextProvider } from "@/hooks/AuthContext";
import { useEffect } from "react";

type Props = { userInfo: any; displayAlert: (msg: string) => void };
console.log();

function Home({ userInfo, displayAlert }: Props) {

  return (
    <AuthContextProvider>
      <div className="flex min-h-screen max-w-10xl mx-auto justify-center">
        <div className="hidden sm:flex flex-col p-2 xl:items-start sticky h-full xl:ml-24">
          <Sidebar userInfo={userInfo} />
        </div>
        <Feed_section userInfo={userInfo} />
        <Widget userInfo={userInfo} />

        <Footer userInfo={userInfo} displayAlert={displayAlert} />
      </div>
    </AuthContextProvider>
  );
}

export default AuthGaurd(Home);

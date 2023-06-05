"use client";

import AuthGaurd from "@/HOC/AuthGaurd";
import Footer from "@/components/organisms/Footer/Footer";
import CommentModal from "@/components/organisms/ModalComponent/CommentModal";
import Feed_section from "@/components/organisms/feed/Feed";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import Widget from "@/components/organisms/widget/Widget";
import { AuthContextProvider } from "@/hooks/AuthContext";

type Props = { userInfo: any };

function Home({ userInfo }: Props) {
  return (
    <AuthContextProvider>
      <div className="flex min-h-screen max-w-10xl mx-auto justify-center">
        <div className="hidden sm:flex flex-col p-2 xl:items-start sticky h-full xl:ml-24">
          <Sidebar userInfo={userInfo} />
        </div>
        <Feed_section userInfo={userInfo} />
        <Widget userInfo={userInfo} />
        <CommentModal userInfo={userInfo} />
        <Footer userInfo={userInfo} />
      </div>
    </AuthContextProvider>
  );
}

export default AuthGaurd(Home);

import Feed from "@/components/atoms/feed-header";
import Feed_section from "./Pages/feed-section/Feed";

type Props = {};
export default function Home({}: Props) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      {/* <Sidebar /> */}
      <Feed_section />
      {/* <Widget /> */}
    </div>
  );
}

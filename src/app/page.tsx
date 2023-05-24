import Feed from "@/components/atoms/Feed";


type Props = {};
export default function Home({}: Props) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto">
      {/* <Sidebar /> */}
      <Feed />
      {/* <Widget /> */}
    </div>
  );
}

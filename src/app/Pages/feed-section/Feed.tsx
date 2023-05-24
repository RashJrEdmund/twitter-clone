import Feed_header from "@/components/atoms/feed-header";
import Input_feed_section from "@/components/molecules/Input_feed_section";


type Props = {};

export default function Feed_section({}: Props) {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <Feed_header />
      <Input_feed_section/>
    </div>
  );
}

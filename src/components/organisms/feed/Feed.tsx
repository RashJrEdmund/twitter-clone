import Feed_header from "@/components/atoms/feed-header";
import Input_feed_section from "@/components/molecules/Input_feed_section";
import Feed_post_section from "./Feed_post_section";

type Props = {};

export default function Feed_section({}: Props) {
  const posts = [
    {
      id: "1",
      name: "Viany",
      username: "code",
      userImg:
        "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img: "https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "nice view",
      timestamp: "2 hours",
    },
    {
      id: "2",
      name: "Charles",
      username: "Rebase",
      userImg:
        "https://plus.unsplash.com/premium_photo-1684164601795-690f2b348144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img: "https://images.unsplash.com/photo-1684945905564-dca7eb450fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "woow!!",
      timestamp: "2 days ago",
    },
    {
      id: "3",
      name: "Rebase",
      username: "very",
      userImg:
        "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      img: "https://images.unsplash.com/photo-1684394944541-c57e2df37ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "great!!",
      timestamp: "5 days ago",
    },
  ];
  return (
    <div className="xl:ml-[350px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <Feed_header />
      <Input_feed_section />
      {posts.map((post) => (
        <Feed_post_section key={post.id} post={post} />
      ))}
    </div>
  );
}

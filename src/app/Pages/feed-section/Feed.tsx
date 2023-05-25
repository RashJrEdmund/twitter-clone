import Feed_header from "@/components/atoms/feed-header";
import Input_feed_section from "@/components/molecules/Input_feed_section";
import Feed_post_section from "@/components/organisms/Feed_post_section";

type Props = {};

export default function Feed_section({}: Props) {
  const posts = [
    {
      id: "1",
      name: "Viany",
      username: "code",
      userImg:
        "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp",
      img: "https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "nice view",
      timestamp: "2 hours",
    },
    {
      id: "2",
      name: "Charles",
      username: "Rebase",
      userImg:
        "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp",
      img: "https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "woow!!",
      timestamp: "2 days ago",
    },
    {
      id: "3",
      name: "Rebase",
      username: "very",
      userImg:
        "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp",
      img: "https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "great!!",
      timestamp: "5 days ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <Feed_header />
      <Input_feed_section />
      {posts.map((post) => (
        <Feed_post_section key={post.id} post={post} />
      ))}
    </div>
  );
}

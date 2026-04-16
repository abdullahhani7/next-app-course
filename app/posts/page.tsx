import PostItem from "@/components/PostItem/PostItem";
import { TPost } from "@/utils/types";

const page = async () => {
  const res = await fetch("https://dummyjson.com/posts", { cache: "no-store" });
  const posts = await res.json();
  console.log("posts", posts);

  if (!res.ok) {
    throw new Error("fialed to fetch data");
  }

  return (
    <div className="flex items-center justify-center flex-wrap gap-7">
      {posts?.posts?.map((post: TPost) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default page;

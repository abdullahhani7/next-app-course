import { TPost } from "@/utils/types";

const page = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();
  console.log("posts", posts);

  if (res.ok) {
    throw new Error("fialed to fetch data");
  }

  return (
    <div className="grid grid-cols-3 gap-7">
      {posts?.posts?.map((post: TPost) => (
        <div key={post.id} className="bg-amber-200 p-2">
          <h1 className="bg-red-500">{post.title}</h1>
          <p className="bg-blue-500">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto">
      <div className="my-4 mx-auto p-2 w-full md:w-2/3 bg-gray-400 border-2 border-blue-400 rounded-md">
        <h2 className="text-2xl font-bold text-red-900">
          <span className="text-2xl">#{post?.id}</span> {post?.title}
        </h2>
        <p className="text-sm text-gray-600">{post?.body}</p>
      </div>
    </div>
  );
};

export default page;

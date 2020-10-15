import { Post } from "src/@types";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          date={post.date}
          description={post.description}
          slug={post.slug}
          title={post.title}
          tags={post.tags}
        />
      ))}
    </div>
  );
}

import Link from "next/link";
import { Post } from "src/@types";

function TagItem({ tag }: { tag: string }) {
  return (
    <div className="rounded-full border-2 text-gray-500 py-1 px-3">{tag}</div>
  );
}

function TagList({ tags }: Pick<Post, "tags">) {
  return (
    <div className="flex my-2">
      {tags.map((tag) => (
        <TagItem tag={tag} />
      ))}
    </div>
  );
}

export default function PostItem({
  date,
  description,
  slug,
  title,
  tags,
}: Omit<Post, "content">) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="hover:bg-gray-100 cursor-pointer px-4 py-3">
        <span>{title}</span>
        <div className="flex mb-2">
          <small className="text-sm">{date}</small>
        </div>
        <span className="text-gray-600">{description}</span>
        <TagList tags={tags} />
      </div>
    </Link>
  );
}

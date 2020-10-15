import Link from "next/link";
import { Post } from "src/@types";
import { useHover } from "src/hooks";

function TagItem({ tag }: { tag: string }) {
  return (
    <div className="rounded-full border-2 text-gray-500 py-1 px-3">{tag}</div>
  );
}

function TagList({ tags }: Pick<Post, "tags">) {
  return (
    <div className="flex my-2">
      {tags.map((tag, index) => (
        <TagItem tag={tag} key={index} />
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
  const [hoverRef, hover] = useHover();

  return (
    <Link href={`/posts/${slug}`}>
      <div
        className="flex flex-col cursor-pointer px-4 py-3 hover:shadow-sm"
        ref={hoverRef}
      >
        <span className="font-bold text-red-primary text-xl">{title}</span>
        <small className="text-sm text-gray-500 mb-2">{date}</small>
        <span>{description}</span>
        <TagList tags={tags} />
      </div>
    </Link>
  );
}

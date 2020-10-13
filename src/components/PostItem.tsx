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
  const [hoverRef, hover] = useHover();

  return (
    <Link href={`/posts/${slug}`}>
      <div className="cursor-pointer px-4 py-3 hover:shadow-sm" ref={hoverRef}>
        <span className={`font-bold ${hover && "text-red-primary"}`}>
          {title}
        </span>
        <div className="flex mb-2">
          <small className="text-sm text-gray-500">{date}</small>
        </div>
        <span className="text-purple">{description}</span>
        <TagList tags={tags} />
      </div>
    </Link>
  );
}

import Link from "next/link";
import { useState } from "react";
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
  const [hover, hoverSet] = useState(false);

  return (
    <Link href={`/posts/${slug}`}>
      <div
        className="cursor-pointer px-4 py-3 hover:shadow-sm"
        onMouseOver={() => hoverSet(true)}
        onMouseOut={() => hoverSet(false)}
      >
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

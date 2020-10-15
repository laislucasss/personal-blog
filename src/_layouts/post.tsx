import ReactMarkdown from "react-markdown";
import DefaultLayout from "@layouts/default";

interface PostLayoutProps {
  title: string;
  content: string;
  date: string;
}

export default function PostLayout({
  title,
  content,
  date,
}: React.PropsWithChildren<PostLayoutProps>) {
  return (
    <DefaultLayout>
      <article className="my-6">
        <div className="mb-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <small className="text-sm text-gray-500 mb-2">{date}</small>
        </div>

        <ReactMarkdown source={content} />
      </article>
    </DefaultLayout>
  );
}

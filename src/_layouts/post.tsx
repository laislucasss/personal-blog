import DefaultLayout from "@layouts/default";
import Head from "next/head";
import Link from "next/link";

interface PostLayoutProps {
  title: string;
  content: string;
}

export default function PostLayout({
  title,
  content,
}: React.PropsWithChildren<PostLayoutProps>) {
  return (
    <DefaultLayout title={title} description={content}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </article>
    </DefaultLayout>
  );
}

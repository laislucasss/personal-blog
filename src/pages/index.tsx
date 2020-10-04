import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import { Post } from "src/@types";
import { getAllPosts } from "../api/posts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <DefaultLayout>
      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

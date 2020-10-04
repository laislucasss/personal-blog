import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import { Post } from "src/@types";
import { PostList } from "src/components";
import { getAllPosts } from "../api/posts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <DefaultLayout>
      <PostList posts={posts} />
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

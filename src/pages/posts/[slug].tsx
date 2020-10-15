import PostLayout from "@layouts/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "src/@types";
import { getAllPosts, getPost } from "src/api/posts";

interface PostProps {
  post: Post;
}

export default function PostPage({ post }: PostProps) {
  return (
    <PostLayout content={post.content} title={post.title} date={post.date} />
  );
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const {
    params: { slug },
  } = context;

  const post = await getPost(slug as string);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

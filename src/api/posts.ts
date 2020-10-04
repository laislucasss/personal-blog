import fs from "fs/promises";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/@types";

export async function getAllPosts(): Promise<Post[]> {
  const postFileNames = await fs.readdir("./src/_posts");

  const posts = await Promise.all(
    postFileNames.map(async (fileName) => {
      const file = await fs.readFile(`./src/_posts/${fileName}`);
      const meta = matter(file);

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: meta.data.title,
        tags: meta.data.tags,
        createdAt: meta.data.createdAt,
        content: meta.content,
      };
    })
  );

  return posts;
}

export async function getPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      query: { slug },
    } = req;

    const postFie = await fs.readFile(`./src/_posts/${slug}.md`);

    const meta = matter(postFie);

    const post = {
      slug,
      ...meta.data,
      content: meta.content,
    };

    return res.send(post);
  } catch (e) {
    console.error(e);
    return res
      .status(404)
      .send({ message: "Post not found - invalid post slug." });
  }
}

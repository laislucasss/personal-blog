import fs from "fs/promises";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/@types";

export async function getAllPosts(): Promise<Post[]> {
  const postFileNames = await fs.readdir("./_posts");

  const posts = await Promise.all(
    postFileNames.map(async (fileName) => {
      const file = await fs.readFile(`./_posts/${fileName}`);
      const meta = matter(file);

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: meta.data.title,
        description: meta.data.description,
        tags: meta.data.tags,
        date: meta.data.date,
        content: meta.content,
      };
    })
  );

  return posts;
}

export async function getPost(req: NextApiRequest): Promise<Post | null> {
  try {
    const {
      query: { slug },
    } = req;

    const postFie = await fs.readFile(`./_posts/${slug}.md`);

    const meta = matter(postFie);

    return {
      slug: slug as string,
      title: meta.data.title,
      description: meta.data.description,
      tags: meta.data.tags,
      date: meta.data.date,
      content: meta.content,
    };
  } catch (e) {
    return null;
  }
}

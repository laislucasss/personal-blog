import fs from "fs/promises";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllPosts(
  _: NextApiRequest,
  res: NextApiResponse
) {
  const postFileNames = await fs.readdir("./src/_posts");

  const posts = await Promise.all(
    postFileNames.map(async (fileName) => {
      const file = await fs.readFile(`./src/_posts/${fileName}`);
      const meta = matter(file);

      return {
        slug: fileName.replace(/\.md$/, ""),
        ...meta.data,
        content: meta.content,
      };
    })
  );

  return res.send(posts);
}

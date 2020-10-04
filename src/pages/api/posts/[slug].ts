import fs from "fs/promises";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

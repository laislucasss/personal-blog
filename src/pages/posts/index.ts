import matter from "gray-matter";

export async function getAllPosts() {
  const context = require.context("../_posts", false, /\.md$/);
}

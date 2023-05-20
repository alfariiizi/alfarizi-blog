import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype/lib";

import { rehype } from "rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Removing ".md" from file name to get the id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogPost;
  });

  // Sort post by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(postId: string) {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Getting the all data from file
  const matterResult = matter(fileContents);

  // Process (Convert) content from markdown to html
  const processContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(remarkMath)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(matterResult.content);

  // Convert from VFile (data type from remark) to string
  // const contentHtml = processContent.toString();
  const contentHtml = await rehype()
    .use(rehypePrettyCode)
    .process(processContent);

  // "BlogPost & {contentHtml: string}" means that we insert contentHtml to BlogPost type
  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id: postId,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml: contentHtml.toString(),
  };

  return blogPostWithHtml;
}

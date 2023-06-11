import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

import CustomImage from "@/app/components/mdx-components/CustomImage";

// it used for filetree inside of getPostsMeta() function
type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

// Header for request Github API
const headerRequest = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${process.env.NEXT_APP_GITHUB_TOKEN}`,
  "X-Github-Api-Version": "2022-11-28",
};

/**
 * Getting the metadata and content of the post
 * @param filename name of file (including the extension (ex: clean-code.mdx))
 * @returns Blogpost or Undefined
 */
export async function getPostByName(
  filename: string // filename with .mdx file
): Promise<BlogPost | undefined> {
  // getting the file
  const res = await fetch(
    `https://raw.githubusercontent.com/alfariiizi/blogposts-vault/main/${filename}`,
    {
      headers: headerRequest,
    }
  );

  // if response is not okay
  if (!res.ok) return undefined;

  // getting rawMDX file
  const rawMDX = await res.text();

  // sometimes the rawMDX file is contain "404: Not Found" which is it's like "The page is not found"
  if (rawMDX === "404: Not Found") return undefined;

  // getting compiled mdx
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,

    // all custom component for mdx file have to be registered in here
    components: {
      CustomImage,
    },

    // all options (like plugin) will parse in here
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeSlug],
        remarkPlugins: [remarkMath, remarkGfm],
      },
    },
  });

  // the id is the filename, but without the 'mdx' extension
  const id = filename.replace(/\.mdx$/, "");

  // the blogpost
  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
}

/**
 * Getting all metadata from all posts
 * @returns Meta[] or undefined
 */
export async function getPostsMeta(): Promise<Meta[] | undefined> {
  // getting all file inside of repo blogposts-vault
  const res = await fetch(
    "https://api.github.com/repos/alfariiizi/blogposts-vault/git/trees/main",
    {
      headers: headerRequest,
    }
  );

  // if there is a problem
  if (!res.ok) {
    return undefined;
  }

  // getting file tree
  const repoFiletree: Filetree = await res.json();

  // getting only file that have '.mdx' extension
  const fileArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  // getting all posts meta
  const posts: Meta[] = [];
  for (const file of fileArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  // sort the posts based on date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

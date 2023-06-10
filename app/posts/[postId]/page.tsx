import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoMdReturnLeft } from "react-icons/io";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ weight: ["400"], subsets: ["latin"] });

export const revalidate = 0; // means: we use doesn't use cache

type Props = {
  params: {
    postId: string;
  };
};

export const generateMetadata = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
};

const PostPage = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound(); // the 'return' keyword already inside of notFound() function

  const { meta, content } = post;

  const displayDate = getFormattedDate(meta.date);

  // We will use it for later
  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="prose prose-invert mx-auto">
      <h1 className="mb-0 w-fit bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        {meta.title}
      </h1>
      <p className="mt-0 w-fit italic text-slate-500">{displayDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex gap-4">{tags}</div>
      </section>
      <Link
        href={"/"}
        className="group relative left-3 flex w-fit items-center gap-2 text-text-white-color duration-300 hover:text-blue-500">
        <IoMdReturnLeft className="relative left-0 text-text-white-color duration-300 group-hover:-left-2 group-hover:text-blue-500" />{" "}
        Back to Home
      </Link>
    </div>
  );
};

export default PostPage;

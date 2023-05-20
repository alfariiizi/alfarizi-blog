import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoMdReturnLeft } from "react-icons/io";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ weight: ["400"], subsets: ["latin"] });

type Props = {
  params: {
    postId: string;
  };
};

export const generateMetadata = ({ params: { postId } }: Props) => {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
};

const PostPage = async ({ params: { postId } }: Props) => {
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const post = await getPostData(postId);
  const displayDate = getFormattedDate(post.date);

  return (
    <div className="prose prose-invert mx-auto">
      {/* <h1 className="mb-0 w-fit bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        {post.title}
      </h1>
      <p className="mt-0 w-fit italic text-slate-500">{displayDate}</p>
      <article>
        <section
          className={`${notoSerif.className} first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:uppercase`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <Link
          href={"/"}
          className="group relative left-3 flex w-fit items-center gap-2 text-text-white-color duration-300 hover:text-blue-500">
          <IoMdReturnLeft className="relative left-0 text-text-white-color duration-300 group-hover:-left-2 group-hover:text-blue-500" />{" "}
          Back to Home
        </Link>
      </article> */}
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostPage;

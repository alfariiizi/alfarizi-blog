import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

const Item = ({ post }: Props) => {
  return (
    <div className="relative top-0 border-2 p-2 duration-200 hover:-top-1 hover:shadow-lg hover:shadow-text-white-color">
      <h1 className="">
        <Link
          className="text-lg font-bold text-text-white-color underline underline-offset-1 duration-200 hover:text-blue-500 hover:underline-offset-4"
          href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h1>
      <p>Created on: {getFormattedDate(post.date)}</p>
    </div>
  );
};

export default Item;

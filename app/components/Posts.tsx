import { getSortedPostsData } from "@/lib/posts";
import Item from "./Item";

type Props = {};

const Posts = (props: Props) => {
  const posts = getSortedPostsData();
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li className="not-prose list-none" key={post.id}>
            <Item post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;

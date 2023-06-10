import { getPostsMeta } from "@/lib/posts";
import Item from "./Item";

type Props = {};

const Posts = async (props: Props) => {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p>Sorry, no posts are available</p>;
  }

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

import Posts from "./components/Posts";

// revalidate = 0 means we use doesn't use cache
// revalidate = 10 means revalidate every 10 seconds
export const revalidate = 0;

export default function Home() {
  return (
    <div className="prose prose-invert mx-auto">
      <p className="text-center font-bold">
        Hallo 👋, my name is Alfarizi. I do some blog posts in this site.
      </p>
      <p className="text-center font-bold">Check all of those posts below 👇</p>

      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}

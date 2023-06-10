import Posts from "./components/Posts";

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

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-44">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>This page could not be found.</p>
      <p>
        Back to{" "}
        <Link
          className="text-blue-400 underline underline-offset-0 duration-200 hover:text-blue-600 hover:underline-offset-4"
          href="/">
          homepage
        </Link>
      </p>
    </div>
  );
}

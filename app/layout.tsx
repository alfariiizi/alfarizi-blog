import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alfarizi's Blog",
  description: "Some blog post from Alfarizi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        {/* For math style (rehype-katex) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />

        {/* For syntax highlighting (rehype-highlight) */}
        {/* Stackoverflow theme */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/stackoverflow-dark.min.css"
          integrity="sha512-Xn1b0y/BrCD7usnEh6r9CcKxHXFVleVUjGDnfc95zDDwFUwtOz3lJC/XtJcuLRNyrMQJEEToFfwjC9Ue/aWY/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background-color text-text-white-color`}>
        <Navbar />
        <main className="mx-2 mb-3 mt-28 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

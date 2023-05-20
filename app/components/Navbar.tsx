import Link from "next/link";
import { Special_Elite } from "next/font/google";
import { ImGithub, ImHome3, ImYoutube2 } from "react-icons/im";
import { GoLogoGithub } from "react-icons/go";

const specialElite = Special_Elite({ weight: ["400"], subsets: ["latin"] });

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-background-color/50 py-4 backdrop-blur-md">
      <section className="mx-auto flex max-w-5xl items-center justify-between p-3">
        <h1 className="group relative top-1 h-full text-xl font-bold uppercase">
          <Link
            className={`${specialElite.className} relative top-0 h-full font-bold tracking-widest duration-200 group-hover:-top-1`}
            href={"/"}>
            Alfarizi
          </Link>
        </h1>
        <ul className="flex items-center gap-4 text-xl">
          <li>
            <a
              className="flex items-center gap-1 text-text-white-color duration-200 hover:text-sky-400"
              target="_blank"
              href={"https://github.com/alfariiizi"}>
              <ImGithub size={15} className="" />
              <GoLogoGithub className="w-12" />
            </a>
          </li>
          <li>
            <a
              className="text-text-white-color duration-200 hover:text-red-400"
              target="_blank"
              href={"https://www.youtube.com/@iniologi2748"}>
              <ImYoutube2 className="w-14" />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;

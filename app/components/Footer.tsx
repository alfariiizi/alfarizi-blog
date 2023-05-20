import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { FiYoutube } from "react-icons/fi";
import { ImGithub } from "react-icons/im";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center justify-center gap-10 bg-background-color-spectrum-900 p-4 text-center">
      <div>
        <h1 className="">
          Created by <span className="font-bold">Alfarizi</span>
        </h1>
        <p className="text-sm">alfariiiziiiii@gmail.com</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm">Connect with Me at</p>
        <ul className="flex gap-2">
          <li>
            <a href="https://www.instagram.com/alfariiiziii_/" target="_blank">
              <TiSocialInstagram
                size={25}
                className="relative top-0 text-blue-500 duration-200 hover:-top-1 hover:text-blue-300"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@iniologi2748" target="_blank">
              <FiYoutube
                size={26}
                className="relative top-0 text-red-500 duration-200 hover:-top-1 hover:text-red-300"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/alfariiizi" target="_blank">
              <ImGithub
                size={24}
                className="relative top-0 text-gray-500 duration-200 hover:-top-1 hover:text-gray-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

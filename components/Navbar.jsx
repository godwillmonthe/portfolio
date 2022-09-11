import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-20 shadow-md">
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Link href="#about">
          <Image
            className="hover:cursor-pointer"
            src="/assets/logo.png"
            alt="/"
            width="60"
            height="60"
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-400 font-bold text-gray-500">
              <Link href="#home">Home</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-400 font-bold text-gray-500">
              <Link href="#about" className="scroll-smooth hover:scroll-auto">
                About
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-400 font-bold text-gray-500">
              <Link href="#skill">Skills</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-400 font-bold text-gray-500">
              <Link href="#project">Projects</Link>
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-8 ease-in duration-500"
          }
        >
          <div>
            <div
              className="flex w-full items-center justify-between"
              onClick={() => setNav(false)}
            >
              <Link href="#about">
                <Image
                  className="hover:cursor-pointer"
                  src="/assets/logo.png"
                  alt="/"
                  width="70"
                  height="70"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-8">
              <p className="font-semibold text-center text-lg">
                Welcome to my portfolio !
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <ul className="uppercase font-semibold w-full text-center">
              <li className="py-4 text-sm" onClick={() => setNav(false)}>
                <Link href="#home">Home</Link>
              </li>

              <li className="py-4 text-sm" onClick={() => setNav(false)}>
                <Link href="#about">About</Link>
              </li>

              <li className="py-4 text-sm" onClick={() => setNav(false)}>
                <Link href="#skill">Skills</Link>
              </li>

              <li className="py-4 text-sm" onClick={() => setNav(false)}>
                <Link href="#skill">Projects</Link>
              </li>
            </ul>

            <div className="pt-16">
              <p className="uppercase tracking-widest text-[#5651e5] font-bold text-center mb-10">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] gap-5">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    passHref
                    href="https://www.linkedin.com/in/samir-baatour/"
                  >
                    <a target="_blank" href="/">
                      <FaLinkedin />
                    </a>
                  </Link>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link passHref href="https://github.com/SuperCoolNinja">
                    <a target="_blank" href="/">
                      <FaGithub />
                    </a>
                  </Link>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link passHref href="https://discord.gg/MRt884b5PD">
                    <a target="_blank" href="/">
                      <FaDiscord />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

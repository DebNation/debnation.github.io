import Header from "@/comps/header";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import {
  JetBrains_Mono,
  Teko,
  Mr_Dafoe,
  Poppins,
  Caveat,
} from "next/font/google";
import Image from "next/image";
import satoru from "../../public/satoru.jpeg";
import { useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const teko = Teko({ subsets: ["latin"], weight: "400" });
const MrDafoe = Mr_Dafoe({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className="px-10 bg-neutral-300 dark:bg-neutral-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <h1
              className={`text-4xl ${MrDafoe.className}  text-teal-500 cursor-pointer`}
            >
              <Link href={"/"}>debxd</Link>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <MdLightMode
                    className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                ) : (
                  <MdDarkMode
                    className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                )}
              </li>
              <li>
                <Link
                  href={"https://github.com/debxd"}
                  target="_blank"
                  className="font-poppins bg-gradient-to-r  from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-teal-700 py-2 px-4 text-white rounded-md ml-8"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <div className="h-40 w-40 flex justify-center items-center">
              <Image
                src={satoru}
                alt="image"
                className="rounded-full shadow-inner block hover:shadow-3xl "
              />
            </div>
          </div>
          <div className="text-center">
            <h2
              className={`text-5xl py-2 text-teal-600 dark:text-teal-500 tracking-wide hover:text-teal-700 hover:dark:text-teal-400 cursor-pointer  ${teko.className} `}
            >
              Debiprasad Das
            </h2>
            <h3
              className={`text-xl py-2 text-gray-900 dark:text-gray-200 ${jetbrainsMono.className}`}
            >
              Full Stack Developer, FOSS & Linux Enthuasiast
            </h3>

            <ReactTypingEffect
              staticText="I like to work on"
              text={[
                "Frontend with React  & Typescript.",
                "Backend on Python or Javascript.",
              ]}
              speed={100}
              eraseSpeed={100}
              typingDelay={1000}
              cursor="_"
              className={`${caveat.className} my-5 leading-8 text-gray-800 dark:text-gray-300 text-2xl`}
            />
          </div>
          <div className="mt-5 text-4xl flex justify-center text-gray-600 dark:text-gray-400 gap-16 py-3">
            <Link
              href={"https://github.com/DebXD?tab=repositories"}
              target="_blank"
            >
              <AiFillGithub />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/debiprasad-das-xd/"}
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href={"https://t.me/debnationxd/"} target="_blank">
              <FaTelegramPlane />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

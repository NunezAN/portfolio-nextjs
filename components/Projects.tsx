import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white">
        {projects.map((project, index) => (
          <div className="relative scroll-smooth">
            <a
              href={`#slide${index != 0 ? index - 1 : 4}`}
              className="btn btn-circle absolute z-21 top-1/2 left-[100px] opacity-0 md:opacity-100"
            >
              ❮
            </a>
            <div
              id={`slide${index}`}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen snap-mandatory"
            >
              <motion.img
                initial={{ y: -300 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-[800px]"
                src="https://e-portfolio-02.vercel.app/assets/internshipCover.png"
                alt=""
              />
              <motion.div
                initial={{ y: 300 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-10 px-0 md:px-10 max-w-6xl"
              >
                <h4 className="text-4xl font-semibold text-center">
                  Internship
                </h4>
                <p className="text-lg text-center md:text-left">
                  Online Internship html,CSS, JavaScript Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Suscipit est dolorum
                  eligendi, quis quo, alias, fugit similique error voluptas unde
                  odio amet esse numquam dolorem. Obcaecati soluta ab maiores
                  necessitatibus. Perferendis eligendi ullam ipsa, est animi
                  laborum fuga illo vel!
                </p>
              </motion.div>
            </div>
            <a
              href={`#slide${index != 4 ? index + 1 : 0}`}
              className="btn btn-circle absolute z-21 top-1/2 right-[100px] opacity-0 md:opacity-100"
            >
              ❯
            </a>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#7289da]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

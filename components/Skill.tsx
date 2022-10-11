import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skill({}: Props) {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   transition={{ duration: 1 }}
      //   whileInView={{ opacity: 1 }}
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group relative flex flex-col cursor-pointer p-2"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="w-16 object-fill md:w-28 xl:w-32 group-hover:scale-90 group-hover:brightness-90 transition duration-300 ease-in-out"
      />
      <span className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-center mt-2 text:l xl:text-xl">
        React.JS
      </span>
    </motion.div>
  );
}

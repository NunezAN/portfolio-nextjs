import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:glex-row max-w-[1200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        THIS IS MY TECH STACK
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 mt-10 sm:mt-0">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}

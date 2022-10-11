import React from "react";
import mockImage from "../styles/mockPage.png";

type Props = {};

export default function Projects({}: Props) {
    const projects=[1,2,3,4,5]
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map(project=> (<div>
            <img src="https://e-portfolio-02.vercel.app/assets/internshipCover.png" alt="" />
        </div>))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#7289da]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

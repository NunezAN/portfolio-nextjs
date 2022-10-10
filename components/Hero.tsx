import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Alexis Nunez",
      "I'm a Frontend Developer",
      "Scroll through and learn more about me and what I do",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover overflow-hidden">
        <Image
          src="https://media-exp1.licdn.com/dms/image/D5603AQEnbDPWuxjFUQ/profile-displayphoto-shrink_200_200/0/1664981551253?e=1671062400&v=beta&t=ejaYcHoOk_FOiNcOTBrg9S8l0W13wPu8C9uwxvuFiK0"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7289da" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

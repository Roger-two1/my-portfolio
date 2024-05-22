"use client";
import React from "react";
import { BackgroundBeams } from "./ui/BgBeam";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ShimmerBtn";

export default function Contact() {
  return (
    <div id="contact" className="h-[30rem] w-full  border-0 border-red-600 rounded-md bg-[#18181B] p-5 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-center my-5 capitalize font-semibold text-2xl">Let's <span className="text-purple uppercase">Connect</span></h1>
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        I am always open to make new connections.
        </h1>
        <p></p>
        <p className="text-white-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-5">
        Feel free to reach out! Whether it’s a new project idea or a simple question, I'm all ears.
        </p>

      </div>
        <div className="mail flex justify-center  py-3 px-4 rounded-lg  focus:ring-2 focus:ring-teal-500  w-fit relative z-10   placeholder:text-neutral-700">
        <a href="mailto:shahidshaikh065347@gmail.com?subject=Hi Shahid"><MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          /></a>
        </div>
      <BackgroundBeams />
    </div>
  );
}

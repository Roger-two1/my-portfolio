import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import Marquee from "react-fast-marquee";
import { Button } from "./ui/MovingBorder";
import {
  IoLogoCss3,
  IoLogoDocker,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { SiExpress, SiPrisma, SiRust, SiTypescript } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

export default function SparklesPreview() {
  return (
    <>
      <div
        id="about"
        className=" mx-0 bg-[#18181B] h-[50vh]   flex flex-col items-center justify-center overflow-hidden rounded-none "
      >
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          About Me
        </h1>
        <div className="w-[40rem] h-20 relative ">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full m-1"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full  border-0 border-red-500 bg-[#18181B]  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="text-white-100 flex flex-col items-center lg:flex-row justify-center gap-[50px] md:gap-x-[30px] md:px-10 h-[300px] mb-[120px]  lg:mb-[20px]">
        <div className="info md:w-[650px] border-0 w-full border-white-100   p-2 text-[15px] font-bold leading-relaxed">
          I am a seasoned full stack developer with a strong background in both
          frontend and backend development. I specialize in crafting robust and
          scalable web, mobile, and desktop applications. My comprehensive
          approach ensures that I deliver high-quality, efficient solutions that
          enhance user experience and performance. By leveraging my expertise in
          various technologies, I am able to tackle diverse projects, ensuring
          they meet the highest standards of functionality and reliability.{" "}
          <br />I am deeply interested in blockchain technology and its
          potential to revolutionize digital interactions. I stay updated with
          the latest industry trends and continuously seek to expand my
          knowledge in both Web2 and blockchain domains.
        </div>
        <div className="border-0 border-white-200 w-screen rounded-none md:max-w-xl py-3  bg-[#18181B]">
          <div className="px-3 font-semibold underline">
            <p className="text-white">
              My Tech <span className="text-purple">Stack</span>
            </p>
          </div>
          <Marquee
            speed={30}
            gradient
            gradientWidth={30}
            gradientColor="#18181B"
          >
            <div className="border-0 border-blue-500 flex gap-2 m-2">
              {Stack.map((e) => (
                <Button
                  key={e.lang}
                  borderRadius="1.75rem"
                  className="bg-white bg-black-100/80 text-black text-white border-neutral-200 border-slate-800"
                >
                  {e.lang}
                  {e.icon}
                </Button>
              ))}
            </div>
          </Marquee>
          <Marquee
            direction="right"
            gradient
            gradientWidth={30}
            gradientColor="#18181B"
            speed={30}
          >
            <div className="border-0 border-blue-500 flex gap-2 m-2">
              {Stack.map((e) => (
                <Button
                  key={e.lang}
                  borderRadius="1.75rem"
                  className="bg-white bg-black-100/60  text-black text-white border-neutral-200 border-slate-800"
                >
                  {e.lang}
                  {e.icon}
                </Button>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

const Stack = [
  {
    lang: "HTML",
    icon: <IoLogoHtml5 size={16} className="ml-1" />,
  },
  {
    lang: "CSS",
    icon: <IoLogoCss3 size={16} className="ml-1" />,
  },
  {
    lang: "JavaScript",
    icon: <IoLogoJavascript size={16} className="ml-1" />,
  },
  {
    lang: "TypeScript",
    icon: <SiTypescript size={14} className="ml-1" />,
  },
  {
    lang: "Node.js",
    icon: <IoLogoNodejs size={16} className="ml-1" />,
  },
  {
    lang: "SQL",
    icon: <BiLogoPostgresql size={16} className="ml-1" />,
  },
  {
    lang: "React",
    icon: <IoLogoReact size={16} className="ml-1" />,
  },
  {
    lang: "Next.js",
    icon: <RiNextjsFill size={16} className="ml-1" />,
  },
  {
    lang: "Mongo DB",
    icon: <BiLogoMongodb size={16} className="ml-1" />,
  },
  {
    lang: "Express",
    icon: <SiExpress size={16} className="ml-1" />,
  },
  {
    lang: "Prisma",
    icon: <SiPrisma size={16} className="ml-1" />,
  },
  {
    lang: "Docker",
    icon: <IoLogoDocker size={16} className="ml-1" />,
  },
  {
    lang: "Rust",
    icon: <SiRust size={16} className="ml-1" />,
  },
];

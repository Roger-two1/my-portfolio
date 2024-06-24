"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  return (
    <>
      <div
        id="projects"
        className="h-[10rem] border-0 border-red-900 flex justify-center gap-2 items-center m-5 text-2xl md:text-3xl uppercase"
      >
        <h1 className="font-semibold text-center pb-1  border-b-2 border-white-100 ">
          Projects
        </h1>
        <span>
          <Link href="https://github.com/Roger-two1" target="_blank">
            <FaGithub />
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-2  mx-auto  w-[95vw] lg:w-full lg:max-w-7xl">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              BlockSage
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Stay informed with real-time updates on significant events, market
              trends, and regulatory developments that impact the crypto
              industry and News around the globe.
            </p>
            <div className=" flex gap-3 mt-5  absolute z-20 ">
              <span>
                <Link
                  href="https://github.com/Roger-two1/BlockSage"
                  target="_blank"
                  className="brightness-90 hover:brightness-200"
                >
                  <FaGithub size={20} />
                </Link>
              </span>
              <span>
                <Link
                  href="https://block-sage-10.vercel.app"
                  target="_blank"
                  className="brightness-90 hover:brightness-200"
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              </span>
            </div>
          </div>
          <Image
            src="/blockSage.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4  lg:-right-[10%]  grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold text-white">
            Turbo Octo Chainsaw
            <p className="text-xs mt-1 text-blue-200">It is a random name</p>
          </h2>
          <p className="mt-3 flex gap-2 max-w-[26rem] text-left text-sm text-base/6 text-neutral-200">
            View top cryptocurrency prices live
            <span>
              <Link
                href="https://github.com/Roger-two1/turbo-octo-chainsaw"
                target="_blank"
                className="brightness-90 hover:brightness-200"
              >
                <FaGithub size={20} />
              </Link>
            </span>
            <span>
              <Link
                href="https://turbo-octo-chainsaw-one.vercel.app/"
                target="_blank"
                className="brightness-90 hover:brightness-200"
              >
                <FaExternalLinkAlt size={20} />
              </Link>
            </span>
          </p>
          <Image
            src="/turbo-octo-chainsaw.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4  lg:-right-[10%]  filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* Third Card  */}

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 h-[450px] md:h-full bg-gray-900 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Pop'n Score
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Pop 'n Score is a badass game in which you have to pop the right
              bubbles. This is no ordinary game this is a ruthless battle of
              reflexes and precision.
            </p>
            <div className=" flex gap-3 mt-5  absolute z-20 ">
              <span>
                <Link
                  href="https://github.com/Roger-two1/Pop-n-Score"
                  target="_blank"
                  className="brightness-90 hover:brightness-200"
                >
                  <FaGithub size={20} />
                </Link>
              </span>
              <span>
                <Link
                  href="https://pop-n-score.vercel.app/"
                  target="_blank"
                  className="brightness-90 hover:brightness-200"
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              </span>
            </div>
          </div>
          <Image
            src="/pop'n_score.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4  lg:-right-[10%]  grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </>
  );
}

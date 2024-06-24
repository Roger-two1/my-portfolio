"use client";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="">
      <div>
        <AuroraBackground className="text-center">
          <p className="font-normal md:text-2xl text-white py-4 px-3 w-fit capitalize">
            ✌ Yo!!
          </p>
          <TextGenerateEffect
            words="Crafting web solutions from front to back"
            className="text-3xl md:text-6xl font-bold text-white p-3"
          />
          <div className="font-normal md:text-2xl text-neutral-200 py-4 px-3 w-fit capitalize">
            Hi, I&apos;m <span className="text-purple font-bold">Shahid</span>,
            a Fullstack developer based in India.
          </div>

          <motion.div
            className="flex gap-4 mt-6"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <HiOutlineArrowCircleDown size={22} color="#FFF" />
            <HiOutlineArrowCircleDown size={22} color="#FFF" />
          </motion.div>
        </AuroraBackground>
      </div>
    </div>
  );
};

export default Hero;

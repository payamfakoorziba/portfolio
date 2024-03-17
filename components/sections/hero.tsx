"use client";

import Image from "next/image";
import Container from "../ui/container";
import ProfilePic from "@/public/profile-pic.jpeg";
import { motion } from "framer-motion";
import GetInTouch from "../get-in-touch-button";

const Hero = () => {
  return (
    <Container>
      <div className="mt-20 md:mt-0 flex flex-col-reverse gap-y-10 md:flex-row justify-between items-center pt-20 md:pt-40 gap-x-10 mb-10">
        <div className="flex flex-col flex-1 items-start md:items-start md:text-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Hi, I&apos;m Payam
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-lg md:text-2xl font-light tracking-tighter mt-2 md:mt-4 text-white/70"
          >
            Web designer and developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "linear" }}
          >
            <p className="text-sm md:text-base mt-6 md:mt-12 leading-8">
              I design and build custom websites tailored to elevate your
              business. <br className="hidden lg:block" />
              Ready for a website that stands out?{" "}
              <br className="block sm:hidden" />
              Let&apos;s talk.
            </p>
            <GetInTouch className="mt-6 md:mt-12" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="hidden md:block rounded-full relative size-24 md:size-[300px] lg:size-[350px] overflow-hidden shadow-md shadow-white/5 flex-shrink-0"
        >
          <div className="inset-0 bg-black/15 absolute z-10" />
          <Image
            src={ProfilePic}
            alt="Payam Fakoorziba"
            placeholder="blur"
            fill
            className="object-cover -scale-x-100"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;

"use client";

import { Montserrat, Playfair } from "next/font/google";
const playfair = Playfair({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Page = () => {
  const upToDownAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
      },
    }),
  };

  const downToUpAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
      },
    }),
  };

  const leftToRightAnimation = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
      },
    }),
  };

  const rightToLeftAnimation = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    // Main Container
    <div className="flex flex-col w-full items-center h-full pt-36 mb-24">
      {/* Container */}
      <motion.div
        variants={upToDownAnimation}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
        className="flex flex-col w-10/12 xl:w-6/12 gap-4"
      >
        <div className="flex w-full p-6 rounded-xl bg-red-800 text-black cursor-default group hover:bg-black hover:border-amber-400 border border-red-800 transition-all ease-in-out duration-300">
          <motion.h1
            variants={leftToRightAnimation}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            className="text-6xl underline underline-offset-4 decoration-1 font-bold tracking-widest group-hover:text-amber-400"
          >
            About our company
          </motion.h1>
          <motion.div
            variants={rightToLeftAnimation}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            <div
              className="flex w-full flex-col bg-black group-hover:bg-red-800  rounded-xl mt-4 text-white
            transition-all ease-in-out duration-300"
            >
              <p
                className={cn(
                  "flex h-full w-full items-center justify-center text-center text-2xl rounded-xl p-6 font-thin tracking-wider group-hover:text-black group-hover:font-extrabold transition-all ease-in-out duration-300",
                  playfair.className
                )}
              >
                We are sale and buy facilities. And we are here to help you with
                your needs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Text container and image container */}
        <motion.div
          variants={downToUpAnimation}
          initial="hidden"
          whileInView="visible"
          custom={4}
          viewport={{ once: true }}
        >
          <div className="flex w-full border-red-800 hover:border-amber-400 border flex-col bg-red-950/25 hover:bg-black items-center rounded-xl mt-4 group/first transition-all ease-in-out duration-300">
            {/* Text container */}

            <motion.div
              variants={leftToRightAnimation}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
              className="flex w-full justify-center text-center mt-8"
            >
              <div className="flex flex-col h-20 items-center justify-center w-11/12 border bg-red-800 group-hover/first:bg-black border-red-800 rounded-xl transition-all ease-in-out duration-300 group-hover/first:border-amber-400">
                <p
                  className="flex text-4xl text-center items-center font-normal h-full w-full justify-center text-black
               group-hover/first:text-amber-400 group-hover/first:font-bold transition-all ease-in-out duration-300 group-hover/first:  tracking-widest"
                >
                  Our Achievements
                </p>
              </div>
            </motion.div>

            {/* Image container */}

            <motion.div
              variants={downToUpAnimation}
              initial="hidden"
              whileInView="visible"
              custom={7}
              viewport={{ once: true }}
              className="flex relative gap-6 h-[85vh] items-start justify-start w-full"
            >
              <div className="flex h-[70vh] border-2 border-black rounded-xl flex-1 relative group w-max items-center justify-center m-12 hover:border-amber-400 transition-all ease-in-out duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />

                {/* Text on image */}
                <div className="hidden group-hover:flex flex-col w-full h-full justify-center items-center z-10 group-hover:backdrop-blur-lg group-hover:brightness-75 rounded-xl">
                  <p className="text-6xl text-amber-400 font-light">
                    Best our buy
                  </p>
                  <Link
                    href={"/"}
                    className="z-10 mt-14 border-2 rounded-xl p-2 border-amber-400 text-amber-400 font-light hover:bg-black/85 transition ease-in-out duration-200 text-4xl w-2/3 text-center"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <motion.div className="flex h-[70vh] border-4 hover:border-red-800 border-black rounded-xl flex-1 relative group w-max items-center justify-center m-12 transition-all ease-in-out duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover rounded-[6px]"
                />
                {/* Text on image */}
                <div className="hidden transition ease-in-out duration-700 group-hover:flex flex-col w-full h-full justify-center items-center z-10 group-hover:backdrop-blur-lg group-hover:brightness-75 rounded-[8px]">
                  <p className="text-6xl text-red-600 font-light text-center">
                    Best our sell
                  </p>
                  <Link
                    href={"/"}
                    className="z-10 mt-14 text-red-600 border-2 rounded-xl p-2 border-red-800 font-light hover:bg-black/85 transition ease-in-out duration-200 text-4xl w-2/3 text-center"
                  >
                    View More
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;

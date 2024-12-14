"use client";

import { Montserrat, Playfair } from "next/font/google";
const playfair = Playfair({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { animations } from "@/lib/utils";

const Page = () => {
  const upToDownAnimation = animations.slide("up", 0.8);
  const downToUpAnimation = animations.slide("down", 0.8);
  const leftToRightAnimation = animations.slide("left", 0.8);
  const rightToLeftAnimation = animations.slide("right", 0.8);

  return (
    // Main Container
    <div className="flex flex-col w-full items-center h-full pt-36 mb-24">
      {/* Container */}
      <motion.div
        variants={upToDownAnimation(2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col w-10/12 xl:w-8/12 2xl:w-7/12 gap-4"
      >
        <div className="flex gap-6 w-full items-center p-6 rounded-xl bg-red-800 text-black cursor-default group hover:bg-black hover:border-amber-400 border border-red-800 transition-all ease-in-out duration-300">
          <motion.h1
            variants={leftToRightAnimation(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex1 text-2xl md:text-6xl underline underline-offset-4 decoration-1 font-bold tracking-widest group-hover:text-amber-400"
          >
            About our company
          </motion.h1>
          <motion.div
            variants={rightToLeftAnimation(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="flex1 w-full flex-col bg-black group-hover:bg-red-800  rounded-xl mt-4 text-white
            transition-all ease-in-out duration-300"
            >
              <p
                className={cn(
                  "flex h-full w-full items-center justify-center text-center text-lg md:text-2xl rounded-xl p-6 font-thin tracking-wider group-hover:text-black group-hover:font-extrabold transition-all ease-in-out duration-300",
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
          variants={downToUpAnimation(4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex w-full border-red-800 hover:border-amber-400 border flex-col bg-red-950/25 hover:bg-black items-center rounded-xl mt-4 group/first transition-all ease-in-out duration-300">
            {/* Text container */}

            <motion.div
              variants={leftToRightAnimation(5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex w-full justify-center text-center mt-8"
            >
              <div className="flex flex-col h-20 items-center justify-center w-11/12 border bg-red-800 group-hover/first:bg-black border-red-800 rounded-xl transition-all ease-in-out duration-300 group-hover/first:border-amber-400">
                <p
                  className="flex text-4xl m-6 text-center items-center font-normal h-full w-full justify-center text-black
               group-hover/first:text-amber-400 group-hover/first:font-bold transition-all ease-in-out duration-300 group-hover/first:  tracking-widest"
                >
                  Our Achievements
                </p>
              </div>
            </motion.div>

            {/* Image container */}
            <motion.div
              variants={downToUpAnimation(7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row relative gap-6 h-4/5 min-h-[300px] items-start justify-start w-11/12"
            >
              <div className="flex h-4/5 group/blur max-md:min-w-full min-h-[300px] sm:min-h-svh border-2 border-black rounded-xl flex-1 relative group w-2/3 items-center justify-start mt-6 min-lg:m-12 hover:border-amber-400 transition-all ease-in-out duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover rounded-[6px] group-hover/blur group-hover/blur:blur-md group-hover/blur:brightness-75 transition-all ease-in-out duration-300"
                />

                {/* Text on image */}
                <div className="p-4 hidden group-hover:flex flex-col w-full h-full justify-center items-center z-10 rounded-xl">
                  <p className="text-xl sm:text-4xl lg:text-6xl text-center text-amber-400 font-bold">
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

              <div className="flex group/blur h-4/5 min-h-[300px] sm:min-h-lvh max-md:min-w-full border-4 hover:border-red-800 border-black rounded-xl flex-1 relative group w-2/3 items-center justify-start mb-6 mt-6 min-lg:m-12 transition-all ease-in-out duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover rounded-[6px] group-hover/blur group-hover/blur:blur-md group-hover/blur:brightness-75 transition-all ease-in-out duration-300"
                />
                {/* Text on image */}
                <div className="p-4 hidden transition ease-in-out duration-700 group-hover:flex flex-col w-full h-full justify-center items-center z-10 rounded-[8px]">
                  <p className="text-xl sm:text-4xl lg:text-6xl text-red-600 font-bold text-center">
                    Best our sell
                  </p>
                  <Link
                    href={"/"}
                    className="z-10 mt-14 text-red-600 border-2 rounded-xl p-2 border-red-800 font-light hover:bg-black/85 transition ease-in-out duration-200 text-4xl w-2/3 text-center"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;

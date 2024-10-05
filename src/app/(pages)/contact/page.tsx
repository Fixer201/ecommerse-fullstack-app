"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
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

  return (
    <div className="flex w-full h-full  justify-center items-center pt-64 mb-24">
      <motion.div
        variants={leftToRightAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="flex w-10/12 h-full justify-center items-center"
      >
        <div
          className="w-full h-full border border-red-800 bg-red-950/30 rounded-xl group hover:border-amber-400 hover:bg-black transition-all ease-in-out duration-300
        shadow-2xl shadow-red-800 hover:shadow-amber-400"
        >
          <form action="" className="flex justify-center">
            <div className="flex flex-col w-full rounded-xl p-4 mt-4">
              <motion.div
                variants={upToDownAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={8}
              >
                <p
                  className="text-2xl text-center bg-red-800 border
              border-red-800 p-4 rounded-xl text-black underline underline-offset-4 font-bold group-hover:bg-black group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300"
                >
                  You can contact with us send a message from this page
                </p>
              </motion.div>
              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={9}
              >
                <input
                  type="text"
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600
              focus:outline-none focus:border-red-800
              transition-all ease-in-out duration-500 "
                  placeholder="First Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={10}
              >
                <input
                  type="text"
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600
              focus:outline-none focus:border-red-800
              transition-all ease-in-out duration-500"
                  placeholder="Second Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={11}
              >
                <input
                  type="text"
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600
              focus:outline-none focus:border-red-800
              transition-all ease-in-out duration-500"
                  placeholder="Company Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={12}
              >
                <input
                  type="text"
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600
              focus:outline-none focus:border-red-800
              transition-all ease-in-out duration-500"
                  placeholder="Email"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={13}
              >
                <input
                  type="text"
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600
              focus:outline-none focus:border-red-800
              transition-all ease-in-out duration-500"
                  placeholder="Phone Number (Optional)"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={14}
              >
                <textarea
                  className="w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600
                group-hover:placeholder:text-amber-400
                group-hover:border-amber-400
                group-hover:focus:border-amber-400
                group-hover:text-amber-400
                text-red-600 
                focus:outline-none focus:border-red-800"
                  placeholder="Message"
                ></textarea>
              </motion.div>

              <motion.div
                variants={downToUpAnimation}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                custom={15}
              >
                <Link
                  href="/"
                  className="flex text-3xl font-bold italic w-full h-24 bg-black rounded-2xl text-red-800 mt-12 mb-4 text-center justify-center items-center border border-red-800 group-hover:border-amber-400
                group-hover:text-amber-400 hover:bg-amber-400/50 transition-all duration-300"
                >
                  Send Message
                </Link>
              </motion.div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default page;

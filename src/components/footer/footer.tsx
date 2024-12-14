"use client";

import React from "react";
import { motion } from "framer-motion";
import { Webhook } from "lucide-react";
import { animations } from "@/lib/utils";

const Footer = () => {
  const downToUpAnimation = animations.slide("down", 0.2);

  const upToDownAnimation = animations.slide("up", 1);

  const leftToRightAnimation = animations.slide("left", 1);

  const rightToLeftAnimation = animations.slide("right", 1);

  const defaultMotionProps = {
    viewport: { once: true },
    initial: "hidden",
    whileInView: "visible",
  };

  return (
    <motion.div
      {...defaultMotionProps}
      variants={upToDownAnimation(0)}
      className="flex flex-col group hover:bg-black bg-red-800 p-6 transition-all ease-in-out duration-200 border-t-2 border-red-800 hover:border-amber-400"
    >
      {/* Logo and Basic Info */}
      <motion.div
        {...defaultMotionProps}
        variants={leftToRightAnimation(3)}
        className="flex justify-between items-center w-full text-white group-hover:text-amber-400 font-bold md:text-2xl border-b group-hover:border-amber-400 border-white mb-6 pb-4"
      >
        <div className="flex items-center">
          <p className="text-lg md:text-xl">FDC</p>
        </div>

        <motion.div
          {...defaultMotionProps}
          variants={animations.rotate(4)}
          className="flex items-center justify-center"
        >
          <Webhook
            className="h-12 w-12 bg-black rounded-full p-2 md:h-14 md:w-14 border hover:text-black
            hover:bg-red-800 border-red-800 transition-all ease-in duration-150 text-white
          group-hover:border-amber-400 max-sm:hidden"
          />
        </motion.div>
        <p className="font-light text-base md:text-lg mr-6">
          Fixer Dev Company
        </p>
      </motion.div>
      {/* Contacts */}
      <motion.div
        {...defaultMotionProps}
        variants={rightToLeftAnimation(7)}
        className="flex flex-col md:flex-row justify-between gap-6 md:gap-0"
      >
        <div className="text-white md:text-2xl font-bold group-hover:text-amber-400">
          <p>Contacts</p>
          <p className="text-base font-light mt-2 max-w-36 md:max-w-2xl">
            Address: 123 Luxury St, High City
          </p>
        </div>
        <div className="flex flex-col text-white md:text-xl justify-start items-start md:items-end gap-2 font-light group-hover:text-amber-400">
          <p>Phone: 123-456-7890</p>
          <p>Email: 0o8nO@example.com</p>
          <p>Working Hours: 9am - 6pm</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

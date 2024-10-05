"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Импортируем Link
import { Webhook } from "lucide-react";

const Footer = () => {
  const downToUpAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.7,
      },
    }),
  };

  const leftToRightAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1,
      },
    }),
  };

  const rightToLeftAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1,
      },
    }),
  };

  const logoAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
      rotate: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      rotate: 360,
      transition: {
        delay: custom * 0.4,
        duration: 1,
      },
    }),
  };

  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={downToUpAnimation}
      className="flex flex-col group hover:bg-black bg-red-800 p-4 transition-all ease-in-out duration-200 border-t-2 border-red-800 hover:border-amber-400"
    >
      {/* Logo and Basic Info */}
      <motion.div
        viewport={{ once: true }}
        variants={leftToRightAnimation}
        initial="hidden"
        whileInView="visible"
        custom={2}
        className="flex justify-between items-center w-full text-white group-hover:text-amber-400 font-bold md:text-2xl border-b group-hover:border-amber-400 border-white m-4"
      >
        <div className="flex items-center">
          <p>FDC</p>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={logoAnimation}
          custom={5}
          className="flex items-center justify-center"
        >
          <Webhook
            className="h-12 w-12 bg-black rounded-full p-2 m-2 md:h-14 md:w-14 border hover:text-black
            hover:bg-red-800 border-red-800 transition-all ease-in duration-150 text-white
          group-hover:border-amber-400"
          />
        </motion.div>
        <p className="font-light">Fixer Dev Company</p>
      </motion.div>
      {/* Contacts */}
      <motion.div
        viewport={{ once: true }}
        variants={rightToLeftAnimation}
        initial="hidden"
        whileInView="visible"
        custom={4}
        className="flex justify-between m-4"
      >
        <div className="text-white md:text-2xl font-bold group-hover:text-amber-400">
          <p>Contacts</p>
          <p className="text-base font-light mt-2 max-w-36 md:max-w-2xl">
            Address: 123 Luxury St, High City
          </p>
        </div>
        <div className="flex flex-col text-white md:text-xl justify-start items-end gap-2 font-light group-hover:text-amber-400">
          <p>Phone: 123-456-7890</p>
          <p>Email: 0o8nO@example.com</p>
          <p>Working Hours: 9am - 6pm</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

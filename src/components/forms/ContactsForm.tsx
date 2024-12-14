"use client";

import React from "react";
import { animations } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactsFormProps {
  ContactsFormClassName?: string;
}

const ContactsForm: React.FC<ContactsFormProps> = ({
  ContactsFormClassName,
}) => {
  const upToDownAnimation = animations.slide("up", 0.8);

  const downToUpAnimation = animations.slide("down", 0.8);

  const leftToRightAnimation = animations.slide("left", 0.8);

  const inputsClassName = cn(
    "w-full rounded-xl p-4 mt-8 bg-black/45 border border-red-600 decoration-red-800 placeholder:text-red-600 group-hover:placeholder:text-amber-400 group-hover:border-amber-400 group-hover:focus:border-amber-400 group-hover:text-amber-400 text-red-600 focus:outline-none focus:border-red-800 transition-all ease-in-out",
    ContactsFormClassName
  );

  return (
    <div className="flex w-full h-full  justify-center items-center">
      <motion.div
        variants={leftToRightAnimation(4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex w-10/12 h-full justify-center items-center"
      >
        <div
          className="w-full h-full border border-red-800 bg-red-950/30 rounded-xl group hover:border-amber-400 hover:bg-black transition-all ease-in-out duration-300
    shadow-2xl shadow-red-800 hover:shadow-amber-400"
        >
          <form action="" className="flex justify-center">
            <div className="flex flex-col w-full rounded-xl p-4 mt-4">
              <motion.div
                variants={upToDownAnimation(8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p
                  className="text-2xl text-center bg-red-800 border
          border-red-800 p-4 rounded-xl text-black underline underline-offset-4 font-bold group-hover:bg-black group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300"
                >
                  You can contact with us send a message from this page
                </p>
              </motion.div>
              <motion.div
                variants={leftToRightAnimation(10)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  className={cn("duration-500", inputsClassName)}
                  placeholder="First Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation(11)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  className={cn("duration-500", inputsClassName)}
                  placeholder="Second Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation(12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  className={cn("duration-500", inputsClassName)}
                  placeholder="Company Name"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation(13)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  className={cn("duration-500", inputsClassName)}
                  placeholder="Email"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation(14)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  className={cn("duration-500", inputsClassName)}
                  placeholder="Phone Number (Optional)"
                />
              </motion.div>

              <motion.div
                variants={leftToRightAnimation(15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <textarea
                  className={cn("duration-100", inputsClassName)}
                  placeholder="Message"
                ></textarea>
              </motion.div>

              <motion.div
                variants={downToUpAnimation(16)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                <Link
                  href="/"
                  className="flex text-3xl font-bold w-full h-24 bg-black rounded-2xl text-red-800 mt-12 mb-4 text-center justify-center items-center border border-red-800 group-hover:border-amber-400
            group-hover:bg-amber-400/90 group-hover:text-black hover:scale-110 transition-all duration-300"
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

export default ContactsForm;

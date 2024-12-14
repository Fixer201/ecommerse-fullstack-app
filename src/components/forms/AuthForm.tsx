"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FormInput from "../ui/input";
import { cn } from "@/lib/utils";
import { animations } from "@/lib/utils";

interface AuthFormProps {
  isSignUp?: boolean;
}

const AuthForm = ({ isSignUp = false }: AuthFormProps) => {
  const [isHover, setIsHover] = useState(false);

  const upToDownAnimation = animations.slide("up", 0.9);
  const leftToRightAnimation = animations.slide("left", 0.8);

  return (
    <div className="h-screen w-5/6 max-w-3xl flex items-center justify-center">
      <motion.div
        className={cn(
          "flex flex-col gap-4 w-full h-3/5 border rounded-xl justify-center items-center transition-all duration-150",
          isHover
            ? "bg-black border-amber-400 shadow-amber-400"
            : "bg-red-950/25 border-red-800 shadow-red-800"
        )}
        variants={upToDownAnimation(1)}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <form
          action="/"
          className="flex flex-col gap-4 w-full h-full m-14 justify-start items-center"
        >
          <motion.h1
            className={cn(
              "text-3xl underline underline-offset-4 font-bold",
              isHover ? "text-amber-400" : "text-white"
            )}
            variants={upToDownAnimation(1)}
            initial="hidden"
            animate="visible"
          >
            {isSignUp ? "Register" : "Login"}
          </motion.h1>

          <div className="flex flex-col h-4/5 gap-4 justify-center items-center">
            {isSignUp && (
              <>
                <motion.div
                  variants={leftToRightAnimation(4)}
                  initial="hidden"
                  animate="visible"
                >
                  <FormInput
                    placeholder="First Name"
                    inputType="text"
                    FormInputClassName={cn(
                      "mt-4",
                      isHover
                        ? "placeholder:text-amber-400 border-amber-400 text-amber-400"
                        : "placeholder:text-red-600 border-red-600 text-red-600"
                    )}
                  />
                </motion.div>

                <motion.div
                  variants={leftToRightAnimation(5)}
                  initial="hidden"
                  animate="visible"
                >
                  <FormInput
                    placeholder="Last Name"
                    inputType="text"
                    FormInputClassName={cn(
                      isHover
                        ? "placeholder:text-amber-400 border-amber-400 text-amber-400"
                        : "placeholder:text-red-600 border-red-600 text-red-600"
                    )}
                  />
                </motion.div>
              </>
            )}

            <motion.div
              variants={leftToRightAnimation(6)}
              initial="hidden"
              animate="visible"
            >
              <FormInput
                placeholder="Email"
                inputType="email"
                FormInputClassName={cn(
                  isHover
                    ? "placeholder:text-amber-400 border-amber-400 text-amber-400"
                    : "placeholder:text-red-600 border-red-600 text-red-600"
                )}
              />
            </motion.div>

            <motion.div
              variants={leftToRightAnimation(7)}
              initial="hidden"
              animate="visible"
            >
              <FormInput
                placeholder="Password"
                inputType="password"
                FormInputClassName={cn(
                  isHover
                    ? "placeholder:text-amber-400 border-amber-400 text-amber-400"
                    : "placeholder:text-red-600 border-red-600 text-red-600"
                )}
              />
            </motion.div>

            <motion.div
              variants={leftToRightAnimation(8)}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <Link
                className={cn(
                  "flex items-center justify-center w-full h-16 mt-8 xl:h-20 text-lg lg:text-xl xl:text-xl font-bold border rounded-2xl transition-all duration-300",
                  isHover
                    ? "bg-amber-400/40 text-black border-amber-400 hover:bg-amber-400"
                    : "bg-black text-red-800 border-red-800 hover:bg-red-900"
                )}
                href="/"
              >
                {isSignUp ? "Register" : "Login"}
              </Link>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthForm;

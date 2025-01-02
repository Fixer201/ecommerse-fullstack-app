"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "next/form";
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
    <div className="justify-center items-center h-screen sm:mt-32 w-5/6 max-w-3xl flex">
      <motion.div
        className={cn(
          "flex flex-col gap-4 w-full h-fit border rounded-xl transition-all duration-150",
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
        <Form
          action="/"
          className="flex flex-col gap-2 w-full h-full pt-9 pb-9 justify-between items-center"
        >
          <motion.h1
            className={cn(
              "text-3xl underline underline-offset-4 font-bold pb-4",
              isHover ? "text-amber-400" : "text-white"
            )}
            variants={upToDownAnimation(1)}
            initial="hidden"
            animate="visible"
          >
            {isSignUp ? "Register" : "Login"}
          </motion.h1>

          <div className="flex flex-col h-4/5 gap-4 justify-starts items-center">
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

            {/* Foggot password */}

            {isSignUp != true && (
              <motion.div
                variants={leftToRightAnimation(8)}
                initial="hidden"
                animate="visible"
                className="group flex flex-col items-center justify-end"
              >
                <Link
                  href="/forgot-password"
                  className="text-sm text-red-600 hover:text-amber-400 hover:underline hover:decoration-amber-400"
                >
                  Forgot Password?
                </Link>
              </motion.div>
            )}

            {/* Register / Login */}
            <motion.div
              variants={leftToRightAnimation(8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-2 w-full h-16 mt-8 xl:h-20"
            >
              <Link
                className={cn(
                  "flex items-center justify-center w-full h-full text-lg lg:text-xl xl:text-xl font-bold border rounded-2xl transition-all duration-300",
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
        </Form>
      </motion.div>
    </div>
  );
};

export default AuthForm;

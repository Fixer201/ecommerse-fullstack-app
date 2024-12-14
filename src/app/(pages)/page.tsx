"use client";

import { Montserrat, Playfair } from "next/font/google";
const playfair = Playfair({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

import ReviewsRotatingCard from "@/components/cards/RotatingCards/ReviewsRotatingCard";
import RotatingCard from "@/components/cards/RotatingCards/RotatingCard";
import HeroSwiper from "@/components/swiper/HeroSwiper";
import { ButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { animations } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, BookHeart, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TODO: export animations, classes from all components to separate utils
// animation +
// classes
export default function Home() {
  const leftToRightAnimation = animations.slide("left", 1);

  const rightToLeftAnimation = animations.slide("right", 1);

  const upToDownAnimation = animations.slide("up", 1);

  const downToUpAnimation = animations.slide("down", 1);

  return (
    // Main Container
    <div className="flex flex-col bg-black/40">
      {/* Background Image */}
      <Image
        src={"/bg.jpg"}
        fill
        alt=""
        className="object-cover blur-sm -z-50"
      />
      <motion.div
        className="absolute h-[100vh] inset-0 bg-gradient-to-b from-transparent to-black/60 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      />

      {/* Hero container*/}
      <div className="relative flex flex-col h-[95vh] justify-center items-center w-full md:mt-16">
        {/* content container */}
        <div className="flex flex-col justify-center w-full">
          {/* text container */}
          <motion.div
            variants={leftToRightAnimation(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center mt-24 cursor-default"
          >
            <h1 className="text-center transition-all text-6xl lg:text-7xl xl:text-8xl text-white font-bold max-w-lg lg:max-w-2xl xl:max-w-4xl tracking-wider text-pretty">
              <span className="text-red-800 hover:text-white transition-all duration-300 ease-in-out">
                Buy
              </span>{" "}
              and{" "}
              <span className="text-red-800 hover:text-white transition-all duration-300 ease-in-out">
                {" "}
                sell{" "}
              </span>{" "}
              the{" "}
              <span className="text-red-800 hover:text-white transition-all duration-300 ease-in-out">
                best
              </span>{" "}
              facilities{" "}
              <span className="text-red-800 hover:text-white transition-all duration-300 ease-in-out">
                in the world
              </span>
            </h1>
          </motion.div>

          {/* description container */}
          <div
            className={cn(
              "flex flex-col w-full items-center mt-10",
              playfair.className
            )}
          >
            <div className="flex flex-col w-full items-center p-6">
              <motion.div
                variants={rightToLeftAnimation(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center w-full"
              >
                <p className="text-center w-full text-2xl sm:text-3xl lg:text-4xl text-white font-light max-w-xl lg:max-w-4xl xl:max-w-6xl tracking-wide text-pretty">
                  Welcome to Noble Homes International: <br /> Your Premier
                  Destination for Luxury Properties Worldwide, Where Billions
                  are Invested in Excellence and Elegance.
                </p>

                <p
                  className="text-center w-full text-2xl mt-8 
                 font-light max-w-lg lg:max-w-2xl xl:max-w-4xl italic tracking-wider text-amber-400"
                >
                  "Discover your perfect home today."
                  <br />- John Doe
                </p>
              </motion.div>

              {/* button container */}
              <motion.div
                variants={downToUpAnimation(1)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="mt-10 md:mt-20 lg:mt-12 flex justify-center"
              >
                <div className="flex text-white font-bold text-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                    whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
                  >
                    <Link
                      href="/catalog"
                      className={cn(
                        ButtonVariants({ variant: "outline" }),
                        "text-white backdrop-blur-sm hover:text-amber-400 hover:bg-black border border-red-800 hover:border-amber-400 font-bold text-2xl p-6 transition-all duration-300 ease-in-out hover:italic",
                        montserrat.className
                      )}
                    >
                      Go into your dream
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom container */}
      <div className="flex flex-col items-center h-[75vh] mt-12">
        {/* swiper container */}
        <div className="flex flex-col items-center w-full mt-12 md:mt-0 h-full">
          <motion.div
            variants={downToUpAnimation(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col w-10/12 h-full p-4 rounded-2xl border-2 border-red-800/70 bg-red-950/25 hover:bg-black hover:border-amber-400 group/first"
          >
            <motion.div
              variants={upToDownAnimation(6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1
                className="flex w-full bg-red-800 border border-red-800 underline 
              group-hover/first:bg-black
              group-hover/first:border-amber-400
              group-hover/first:text-amber-400
              transition-all duration-300 ease-in-out
              underline-offset-4 rounded-xl font-bold tracking-widest text-black text-3xl justify-center items-center p-6"
              >
                Our Project Gallery
              </h1>
            </motion.div>
            <motion.div
              variants={rightToLeftAnimation(3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full h-full mt-12"
            >
              <HeroSwiper></HeroSwiper>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Main Container */}
      <div className="w-full flex flex-col items-center mb-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={upToDownAnimation(3)}
          viewport={{ once: true }}
          className="w-full flex flex-col h-full items-center m-12"
        >
          {/* Achievements Container */}
          <div className="flex relative flex-col gap-12 group hover:bg-black bg-red-950/40 border border-red-800/70 hover:border-amber-400 justify-start items-center w-10/12 h-full text-xl text-white p-4 rounded-xl mt-12 transition-all duration-300 easy-in-out">
            <motion.div
              variants={upToDownAnimation(5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center w-full"
            >
              <div className="flex items-center justify-center  text-black rounded-xl p-6 bg-red-800 border border-red-800 group-hover:bg-black group-hover:border group-hover:border-amber-400 group-hover:text-amber-400 font-bold underline underline-offset-4 tracking-widest w-full transition-all duration-500 ease-in-out">
                <h2 className="text-3xl w-full text-center">Our Features</h2>
              </div>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-12 italic text-center antialiased h-full w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={leftToRightAnimation(4)}
                viewport={{ once: true }}
                className="flex flex-1 flex-col justify-center"
              >
                <RotatingCard
                  title="#1 world best real estate"
                  description="We have a lot of awards"
                  icon={<Award className="h-10 w-10" />}
                  MDivClassName="group-hover:bg-black group-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={downToUpAnimation(4)}
                viewport={{ once: true }}
                className="flex flex-1 flex-col justify-center items-center"
              >
                <RotatingCard
                  title="Best Technology"
                  description="Our team use the best technology"
                  icon={<Cpu className="h-10 w-10" />}
                  MDivClassName="group-hover:bg-black group-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
                />
              </motion.div>

              <motion.div
                variants={rightToLeftAnimation(4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-1 flex-col justify-center items-center"
              >
                <RotatingCard
                  title="Best Clients"
                  description="We love our clients and help them to grow"
                  icon={<BookHeart className="h-10 w-10" />}
                  MDivClassName="group-hover:bg-black group-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Reviews */}
      <motion.div
        variants={leftToRightAnimation(3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex w-full justify-center h-full mt-8 mb-24"
      >
        <div className="flex flex-col rounded-xl group w-10/12 h-full gap-12 justify-start items-stretch hover:bg-black bg-red-950/40 border border-red-800/70 hover:border-amber-400 transition-all ease-in-out duration-500">
          {/* Heading container */}
          <motion.div
            variants={upToDownAnimation(4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex text-white justify-center items-start w-full transition-all ease-in-out duration-500">
              <h2 className="text-3xl w-full m-8 text-center border group-hover:bg-black group-hover:border-amber-400 group-hover:text-amber-400 border-red-800 bg-red-800 p-8 rounded-xl font-bold tracking-widest transition-all ease-in-out duration-200 text-black underline underline-offset-4">
                Reviews at our client
              </h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-12 items-center m-8 -mt-4 min-h-56 transition-all ease-in-out duration-500">
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
            <ReviewsRotatingCard
              title="Second"
              description="We have a lot of reviews"
              image="https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              MDivClassName="group-hover:bg-black grop-hover:border group-hover:border-amber-400 group-hover:text-amber-400 transition-all ease-in-out duration-300 hover:duration-100"
              titleClassName="border-2 w-full border-red-800 group-hover:border-amber-400  rounded-xl text-center"
              descriptionClassName="group-hover:italic group-hover:font-bold font-light transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

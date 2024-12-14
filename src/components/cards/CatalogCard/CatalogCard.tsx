"use client";

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "@/lib/utils";
import Link from "next/link";

type catalogProps = {
  name: string;
  address: string;
  description: string;
  price: string;
  image: string;
  id: number;
};

const CatalogCard = ({
  name,
  address,
  description,
  price,
  image,
  id,
}: catalogProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const downToUpAnimation = animations.slide("down", 0.3);

  return (
    <div
      className="flex flex-col rounded-xl border-2 border-red-950 hover:border-amber-400 h-full w-full duration-300 transition-all relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex w-full h-full flex-col justify-end relative">
        <Image src={image} fill alt="" className="object-cover rounded-xl" />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={downToUpAnimation(0)}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-0 left-0 right-0 h-5/6 sm:h-4/6 flex flex-col justify-end backdrop-blur-md rounded-xl bg-black/40"
            >
              <div className="flex flex-col w-full h-full justify-between items-center gap-1 sm:gap-4 border-t border-amber-300 pb-6 pt-6">
                {/* Description */}
                <p className="text-white flex text-center items-center font-light px-4">
                  {description}
                </p>

                {/* Price */}
                <p className="text-amber-400 flex text-center items-center text-2xl">
                  {price}
                </p>

                {/* Show Details Button */}
                <Link href={`/catalog/${id}`}>
                  <button className="text-black font-extrabold bg-amber-300 border-2 rounded-xl px-8 py-2 border-amber-300 flex text-center items-center hover:bg-black hover:text-amber-300 transition-all ">
                    Show details
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CatalogCard;

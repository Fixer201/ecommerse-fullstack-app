"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Webhook } from "lucide-react";
import Link from "next/link";
import { ButtonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Home",
    href: "/",
    id: "1",
  },
  {
    name: "About",
    href: "/about",
    id: "2",
  },
  {
    name: "Contact",
    href: "/contact",
    id: "3",
  },
  {
    name: "Catalog",
    href: "/catalog",
    id: "4",
  },
];

const NavBar = () => {
  const isLoggedIn = false;
  const pathname = usePathname();

  return (
    // Desktop navigation
    <div className="hidden fixed w-full md:flex justify-center z-50 backdrop-blur-2xl border-b border-red-800">
      {/* Navbar container */}
      <div className="p-8 flex items-center gap-8 lg:gap-32 xl:gap-64 2xl:gap-72">
        {/* Logo container */}
        <div className="flex rounded-lg text-white text-xl lg:ml-12 xl:ml-24 ml-3">
          <Link href="/">
            <Webhook className="h-12 w-12 2xl:w-16 2xl:h-16 bg-black rounded-full p-2 lg:h-14 lg:w-14 border hover:text-black hover:bg-red-800 border-red-800 transition-all ease-in duration-150" />
          </Link>
        </div>

        {/* Navbar items container */}
        <div>
          <nav className="flex w-full bg-transparent border border-red-800 rounded-md max-w-sm md:max-w-md lg:max-w-md xl:max-w-xl 2xl:max-w-3xl transition-all ease-in duration-150 text-white items-center h-12 xl:h-14">
            {/* Navbar items */}
            <div className="flex m-3 gap-4 md:text-lg xl:text-xl md:text-md md:gap-8 xl:gap-12 font-extralight">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.2, transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.25 } }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-sm p-2",
                      pathname === item.href
                        ? "text-red-500 underline contrast-200 underline-offset-4 decoration-2 font-bold decoration-red-500"
                        : "hover:underline underline-offset-4 hover:text-white hover:font-light text-gray-300"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </div>
        {/* Auth container */}
        {isLoggedIn ? (
          <div className="flex text-white font-extralight text-md text-center -ml-2 h-12 xl:h-14 lg:-ml-8 2xl:-ml-24">
            <Link
              className={cn(
                ButtonVariants({ variant: "outline" }),
                "mr-4 lg:mr-8 h-12 xl:h-14 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:p-4 hover:bg-red-900 hover:font-bold duration-200 border-red-800"
              )}
              href="/"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex text-white font-extralight text-md text-center -ml-2 lg:-ml-8 2xl:-ml-24">
            <Link
              className={cn(
                ButtonVariants({ variant: "outline" }),
                "mr-4 lg:mr-8 h-12 xl:h-14 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:p-4 hover:bg-red-900 hover:font-bold duration-200 border-red-800"
              )}
              href="/sign-in"
            >
              Sign in
            </Link>

            <Link
              className={cn(
                ButtonVariants({ variant: "outline" }),
                "mr-4 lg:mr-8 h-12 xl:h-14 lg:text-lg xl:text-xl 2xl:text-2xl 2xl:p-4 hover:bg-red-900 hover:font-bold duration-200 hover:text-black border-red-800"
              )}
              href="/sign-up"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      {/* TODO: add a mobile navigation */}
    </div>
  );
};

export default NavBar;

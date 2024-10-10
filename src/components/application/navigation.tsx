"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import NavLink from "./navlink";

import OurApps from "./our-apps";
import ResponsiveNavBar from "./responsive-navbar";

import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  //Close the Nav bar whenever the pathname changes
  useEffect(() => {
    if (open) {
      setOpen((previous) => !previous);
    }
  }, [pathname]);

  return (
    <div
      className={`w-full bg-white flex justify-center h-20 large:h-[104px]  z-40 duration-500 fixed top-0 left-0`}
    >
      <nav className="bg-white max-w-[1600px] absolute z-30 h-20 large:h-[104px] tablet:px-6 px-[112px] flex items-center justify-between w-full  ">
        {/* Primary Navigation Menu */}

        {/* Logo */}

        <Link href="/" className="h-max overflow-y-hidden w-max">
          <motion.img
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "linear", duration: 0.5 }}
            src="/images/nav-logo.svg"
            alt=""
            className="large:w-[221px] w-40 sm:w-48 h-max"
          />
        </Link>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 2 }}
          className="hidden items-center gap-7 large:gap-10 lg:flex"
        >
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>

          <OurApps />
        </motion.div>

        {/* Hamburger */}
        <div className="flex h-max overflow-y-hidden items-center lg:hidden">
          <motion.button
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "linear", duration: 0.5 }}
            onClick={() => setOpen((prev) => !prev)}
            className="w-[18px] h-max flex flex-col gap-1.5 bg-transparent border-none outline-none"
          >
            <div
              className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                open
                  ? "rotate-[45deg] translate-y-[3.6px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
            <div
              className={`w-full h-[1px] bg-tremor-brand-boulder700 duration-300 ${
                open
                  ? "-rotate-[45deg] -translate-y-[3.6px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
          </motion.button>
        </div>
      </nav>

      {/* Responsive Navigation Menu */}

      <ResponsiveNavBar open={open} />
    </div>
  );
};

export default Navigation;

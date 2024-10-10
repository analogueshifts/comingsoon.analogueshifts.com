"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Params {
  item: {
    link: string;
    icon: ({ color }: { color: string }) => React.ReactNode;
  };
}

export default function SocialButton({ item }: Params) {
  const [state, setState] = useState("none");

  return (
    <motion.a
      href={item.link}
      onClick={() => setState("clicked")}
      onMouseOut={() => setState("none")}
      onMouseOver={() => setState("hover")}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ ease: "linear", duration: 0.2 }}
      className={`large:h-14 duration-300 large:w-14 h-11 w-11 rounded-full flex justify-center items-center ${
        state === "none"
          ? "border border-[#FFBB0A66] bg-[#FFBB0A0A]"
          : state === "hover"
          ? "border border-[#FFBB0A66] bg-tremor-background-darkYellow"
          : "bg-[#D79B00] border border-[#FFBB0A66]"
      }`}
    >
      <item.icon color={state === "none" ? "#ffbb0a" : "#ffffff"} />
    </motion.a>
  );
}

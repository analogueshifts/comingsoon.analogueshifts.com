"use client";

import { motion } from "framer-motion";

interface Params {
  phrases: string;
  delay: number;
  stagger: number;
  position?: any;
  className?: string;
}

export default function AnimatedText({
  phrases,
  className,
  delay,
  stagger,
  position,
}: Params) {
  const animation = {
    initial: { y: "150%" },

    enter: {
      y: "0",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      <motion.span
        initial="initial"
        animate="enter"
        aria-hidden
        transition={{ staggerChildren: stagger, delayChildren: delay }}
        className={className}
      >
        {phrases.split(" ").map((word, index) => {
          return (
            <span
              key={index}
              className={`${
                index === position ? "italic" : ""
              } relative inline-flex overflow-hidden ${className} `}
            >
              <motion.span variants={animation} key={index}>
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          );
        })}
      </motion.span>
    </>
  );
}

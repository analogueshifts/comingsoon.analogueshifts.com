import Image from "next/image";
import Resume from "@/assets/images/resume.svg";
import Book from "@/assets/images/book.svg";
import AnimatedText from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import React from "react";
import { useSearchParams } from "next/navigation";

interface Params {
  handleNotify: () => void;
}

export default function Hero({ handleNotify }: Params) {
  const searchParams = useSearchParams();
  const isResume = searchParams.get("app") === "resume";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNotify();
  };

  return (
    <div className="w-full large:pt-[138px] pb-10 pt-[78px] bg-white tablet:flex-col-reverse flex-row justify-between px-[112px] tablet:px-6 gap-[51px]  h-max items-center flex">
      <div className="w-max max-w-[calc(55%-51px)] tablet:max-w-full flex flex-col gap-6">
        <div className="w-max h-max overflow-y-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="w-max max-w-full h-max rounded-full tablet:py-1 py-1.5 large:py-2.5 tablet:px-2.5 px-3.5 large:px-6 flex items-center tablet:gap-1 gap-2.5 bg-tremor-background-darkYellow/10"
          >
            <Image
              className="large:w-max h-max tablet:w-2.5 w-4"
              src={isResume ? Resume : Book}
              alt=""
            />
            <p className="font-medium tablet:text-xs text-sm large:text-base text-tremor-background-darkYellow">
              Coming Soon
            </p>
          </motion.div>
        </div>
        <div className="w-max max-w-full flex flex-col">
          <h3
            className={`overflow-hidden large:text-[32px] tablet:text-xl text-2xl tablet:leading-8 leading-[45px] mb-4 large:mb-[38px] font-semibold large:leading-[64px] text-black`}
          >
            <AnimatedText
              phrases={
                isResume
                  ? "Craft Your Professional Resume"
                  : "Get Ready to Learn, Teach, and"
              }
              delay={0}
              stagger={0.05}
            />
            <br />{" "}
            <span className="text-tremor-background-darkYellow">
              {" "}
              <AnimatedText
                phrases={isResume ? "Effortlessly..." : "Share Courses!"}
                delay={0}
                stagger={0.05}
              />
            </span>
          </h3>
          <p
            className={`text-tremor-brand-boulder400 mb-8 large:text-xl text-base leading-9 large:leading-[48px] font-normal `}
          >
            <AnimatedText
              phrases={
                isResume
                  ? "Our AI-driven resume builder is on its way! Get ready to"
                  : "Learn and teach with ease. Post and explore courses, and"
              }
              delay={0}
              stagger={0.05}
            />
            <br />{" "}
            <AnimatedText
              phrases={
                isResume
                  ? "effortlessly create your standout professional resume with our"
                  : "connect with a community of learners and educators."
              }
              delay={0}
              stagger={0.05}
            />{" "}
            <br />{" "}
            <AnimatedText
              phrases={
                isResume ? "Genius resume maker. Stay tuned!" : "Stay tuned!"
              }
              delay={0}
              stagger={0.05}
            />
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full h-max overflow-hidden flex items-center tablet:gap-3 gap-6 mb-[19px]"
          >
            <motion.input
              type="email"
              placeholder="Email Address"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="w-full rounded-2xl border border-[#E7E7E7] h-14 large:px-16 px-12 tablet:px-6 outline-none large:text-lg text-base tablet:text-[13px] font-normal placeholder:text-[#E7E7E7] text-tremor-brand-boulder900"
            />{" "}
            <motion.button
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ease: "linear", duration: 0.5 }}
              type="submit"
              className="min-w-max hover-text-button flex justify-center items-center large:px-16 px-12 tablet:px-6 h-14 rounded-2xl bg-tremor-background-darkYellow text-[#FEFEFE] large:text-xl tablet:text-sm text-lg font-medium"
            >
              <div className="flex-col flex overflow-hidden relative h-4">
                {" "}
                <span className="h-5 leading-4 overflow-hidden duration-300">
                  {" "}
                  Notify Me
                </span>{" "}
                <span className="h-5 leading-4 overflow-hidden absolute translate-y-4 duration-300">
                  {" "}
                  Notify Me
                </span>
              </div>
            </motion.button>
          </form>
          <p className="font-normal text-tremor-brand-boulder300 large:text-base text-sm tablet:text-xs">
            <AnimatedText
              phrases=" - Notify me once the it is launched -"
              delay={0}
              stagger={0.05}
            />
          </p>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ ease: "linear", duration: 2 }}
        src={isResume ? "/images/resume-hero.svg" : "/images/learn-hero.svg"}
        alt=""
        className="w-[45%] h-max tablet:w-max"
      />
    </div>
  );
}

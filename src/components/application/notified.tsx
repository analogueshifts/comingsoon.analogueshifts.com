"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import AnimatedText from "@/components/ui/animated-text";

interface Params {
  setNotified: (value: boolean) => void;
}

export default function Notified({ setNotified }: Params) {
  const searchParams = useSearchParams();
  const isResume = searchParams.get("app") === "resume";

  return (
    <div className="large:pt-[124px] px-6 large:pb-[370px] pb-[130px] pt-[64px] flex flex-col items-center w-full">
      <h3
        className={`overflow-hidden large:text-[32px] tablet:text-xl text-2xl tablet:leading-8 leading-[45px] mb-3 large:mb-5 font-semibold large:leading-[64px] text-black`}
      >
        <AnimatedText phrases="Coming" delay={0} stagger={0.05} />{" "}
        <span className="text-tremor-background-darkYellow">
          <AnimatedText phrases=" Soon!" delay={0} stagger={0.05} />
        </span>
      </h3>
      <p
        className={`text-tremor-brand-boulder400 large:mb-6 mb-5 large:text-xl text-base text-center leading-9 large:leading-[48px] font-normal `}
      >
        {" "}
        <AnimatedText
          phrases={
            isResume
              ? "Thanks for letting us know you'd like to be notified when our Resume Builder launches!"
              : "Thanks for indicating you'd like to be notified when our Learning Platform goes live! We"
          }
          delay={0}
          stagger={0.05}
        />
        <br />{" "}
        <AnimatedText
          phrases={
            isResume
              ? "AI-driven resume creation experience. Stay"
              : "can’t wait to provide you with a seamless way to learn, teach, and share courses. Stay"
          }
          delay={0}
          stagger={0.05}
        />{" "}
        <br />{" "}
        <AnimatedText
          phrases={
            isResume
              ? "We're excited to offer you an effortless, tuned for updates and early access!"
              : "tuned for updates and early access!"
          }
          delay={0}
          stagger={0.05}
        />
      </p>
      <div className="w-max h-max overflow-y-hidden">
        <motion.button
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ ease: "linear", duration: 0.5 }}
          type="button"
          onClick={() => setNotified(false)}
          className="min-w-max hover-text-button flex justify-center items-center large:px-16 px-12 tablet:px-6 h-14 rounded-2xl bg-tremor-background-darkYellow text-[#FEFEFE] large:text-xl tablet:text-sm text-lg font-medium"
        >
          <div className="flex-col flex overflow-hidden relative h-4">
            {" "}
            <span className="h-5 leading-4 overflow-hidden duration-300">
              {" "}
              Go back
            </span>{" "}
            <span className="h-5 leading-4 overflow-hidden absolute translate-y-4 duration-300">
              {" "}
              Go back
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}

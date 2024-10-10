"use client";
import SocialButton from "./social-button";
import { socialIcons } from "../utilities/social-icons";
import Link from "next/link";
import AnimatedText from "../ui/animated-text";

export default function Footer() {
  return (
    <footer className="w-full bg-white flex justify-center h-max py-8 large:py-12 z-30 ">
      <div className="w-full max-w-[1600px] flex items-center justify-between large:h-14 h-11 tablet:h-max tablet:flex-col tablet:gap-3 tablet:px-6 px-[112px]">
        <div className="h-full tablet:h-11 w-max flex overflow-y-hidden items-center gap-4 tablet:gap-3 tablet:w-full">
          <p className="text-tremor-brand-boulder950 tablet:hidden tablet:text-sm large:text-lg text-base font-medium">
            <AnimatedText phrases="Reach Us At" delay={0} stagger={0.05} />
          </p>
          {socialIcons.map((item) => (
            <SocialButton key={item.link} item={item} />
          ))}
        </div>
        <p className="text-tremor-brand-boulder950 tablet:text-[13px] large:text-lg text-base font-normal">
          <AnimatedText
            phrases={"©" + new Date().getFullYear() + " |"}
            delay={0}
            stagger={0.05}
          />{" "}
          <AnimatedText
            phrases="All Rights Reserved |"
            delay={0}
            stagger={0.05}
          />
          <Link
            href="https://www.analogueshifts.com/docs/privacy-policy"
            className="underline"
          >
            <AnimatedText phrases="Privacy |" delay={0} stagger={0.05} />
          </Link>
          <Link
            href="https://www.analogueshifts.com/docs/terms-and-conditions"
            className="underline"
          >
            <AnimatedText phrases="Terms of Service" delay={0} stagger={0.05} />
          </Link>
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import React from "react";

interface Params {
  href: string;
  children: React.ReactNode;
}

const ResponsiveNavLink = ({ href, children, ...props }: Params) => (
  <Link
    href={href}
    {...props}
    className={`text-xl text-tremor-brand-boulder700 font-bold  focus:outline-none  `}
  >
    <b className="flex items-center gap-1.5 flex-row ">{children}</b>
  </Link>
);

export default ResponsiveNavLink;

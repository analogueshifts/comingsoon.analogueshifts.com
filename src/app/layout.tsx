import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/application/footer";
import Navigation from "@/components/application/navigation";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Analogueshifts Coming Soon Apps",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <div className="w-full bg-white flex justify-center">
          <section className="bg-white w-full large:pt-[104px] pt-20  max-w-[1600px]">
            <Navigation />
            {children}
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}

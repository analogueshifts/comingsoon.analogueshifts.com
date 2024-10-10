"use client";
import Hero from "@/components/application/hero";
import { Suspense, useState } from "react";

import Notified from "@/components/application/notified";

export default function Home() {
  const [notified, setNotified] = useState(false);

  return (
    <section className="w-full  flex justify-center">
      {notified ? (
        <Suspense fallback={<div></div>}>
          <Notified setNotified={setNotified} />
        </Suspense>
      ) : (
        <Suspense fallback={<div></div>}>
          <Hero handleNotify={() => setNotified(true)} />
        </Suspense>
      )}
    </section>
  );
}

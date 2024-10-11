import React from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function NotFound() {
  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <Header showCTAButton />
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">Not Found | <Link href="/" className="underline">Go to Home Page</Link></h2>
      </main>
      <Footer />
    </div>
  );
}


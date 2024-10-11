import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ErrorButton from "@/components/elements/error-button";

export default function Home() {
  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <Header showCTAButton />
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">Bunch of SEO filled Landing Page here</h2>
        <ErrorButton />
      </main>
      <Footer />
    </div>
  );
}


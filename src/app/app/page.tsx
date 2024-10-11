import React from "react";
import Header from "@/components/sections/header";

export default function App() {
  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <Header showCTAButton />
      <main className="flex-grow flex flex-col pt-8">
        <h2>Hello</h2>
      </main>
    </div>
  );
}


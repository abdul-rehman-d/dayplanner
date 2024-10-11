import React from "react";
import Header from "@/components/sections/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <Header />
      <main className="flex-grow pt-8 flex flex-col lg:flex-row">
        {children}
      </main>
    </div>
  );
}


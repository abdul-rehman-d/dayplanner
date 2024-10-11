import React from "react";
import Link from "next/link";

export default function Header({
  showCTAButton = false,
}: {
  showCTAButton?: boolean
}) {
  return (
    <header className="bg-foreground text-background rounded-xl md:rounded-2xl py-4 px-4 md:px-8 flex flex-row gap-8 justify-between items-center">
      <Link href="/">
        <h1 className="font-bold text-2xl md:text-3xl">Day Planner</h1>
      </Link>
      {
        showCTAButton && (
          <Link href="/app" className="bg-background text-foreground py-1 px-4 rounded-3xl font-semibold">
            Try Now!
          </Link>
        )
      }
    </header>
  );
}


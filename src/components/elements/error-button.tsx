"use client";

import React from "react";

export default function ErrorButton() {
  return (
    <button className="bg-foreground_bg bg-opacity-100 text-background py-1 px-4 rounded-lg font-semibold hover:bg-opacity-80" onClick={() => {
      throw new Error("hello, this is an error")
    }}>Throw Error!</button>
  );
}


import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:border-t-gray-200 dark:border-t px-8 py-8 -m-4 flex flex-col items-center">
      <p>
        Made by{' '}
        <a
          href="https://abdul-rehman-d.vercel.app/"
          target="_blank"
          className="underline text-opacity-70"
        >
          Abdul Rehman Daniyal
        </a>
      </p>
    </footer>
  );
}


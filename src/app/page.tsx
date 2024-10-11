import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <header className="bg-foreground text-background rounded-xl md:rounded-2xl py-4 px-4 md:px-8 flex flex-row gap-8 justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-3xl">Day Planner</h1>
        </Link>
        <Link href="/app" className="bg-background text-foreground py-1 px-4 rounded-3xl font-semibold">
          Try Now!
        </Link>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">Bunch of SEO filled Landing Page here</h2>
      </main>
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
    </div>
  );
}


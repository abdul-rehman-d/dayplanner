'use client'

import React, { useEffect } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-dvh w-full p-4 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2>Something went wrong!</h2>
        <button className="bg-foreground_bg bg-opacity-100 text-background py-1 px-4 rounded-lg font-semibold hover:bg-opacity-80"
          onClick={
            () => reset()
          }
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Building2 } from "lucide-react"

export default function ComingSoon() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("2023-12-31T23:59:59")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="p-5">
        <div className="flex items-center justify-center">
          <Building2 className="h-10 w-10 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-blue-600">Prime Square Realty</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">Coming Soon</h1>
        <p className="text-xl text-blue-600 mb-8 max-w-md">
          We're working hard to bring you the best real estate experience. Stay tuned!
        </p>

        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          <div className="bg-white p-3 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600">{days}</div>
            <div className="text-sm text-blue-400">Days</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600">{hours}</div>
            <div className="text-sm text-blue-400">Hours</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600">{minutes}</div>
            <div className="text-sm text-blue-400">Minutes</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600">{seconds}</div>
            <div className="text-sm text-blue-400">Seconds</div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit">Notify Me</Button>
          </form>
        </div>
      </main>

      <footer className="p-5">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
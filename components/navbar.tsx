"use client"
import Link from "next/link"
import React, { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute top-4 sm:top-6 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 ring-1 ring-white/20">
          <Link href="/" className="text-white font-semibold tracking-wide">AURA SAFARIS</Link>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/30 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden sm:flex items-center gap-6 text-white">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li><Link href="/about" className="hover:text-black">About</Link></li>
            <li><Link href="/tour" className="hover:text-black">Tour</Link></li>
            <li><Link href="/services" className="hover:text-black">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-black">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
          </ul>

          <Link href="/book" className="hidden sm:inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium border-2 border-[#cc9933]">
            Book Now
          </Link>
        </nav>

        {open && (
          <div className="sm:hidden mt-2 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 text-white">
            <ul className="flex flex-col divide-y divide-white/10">
              <li><Link onClick={() => setOpen(false)} href="/" className="block px-4 py-3">Home</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/about" className="block px-4 py-3">About</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/tour" className="block px-4 py-3">Tour</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/services" className="block px-4 py-3">Services</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/gallery" className="block px-4 py-3">Gallery</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/contact" className="block px-4 py-3">Contact</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/book" className="block px-4 py-3">Book Now</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

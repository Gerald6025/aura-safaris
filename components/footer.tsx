"use client"
import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      className="relative w-full"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1762351365/e1e0bbbb01f01d5826b09c4e39bfc6ec115794b4_exgw90.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-white text-xl font-semibold">Aura Safaris</h3>
            <p className="mt-4 text-sm leading-6 text-white/90 max-w-xs">
              Premier safari touring company offering unforgettable African
              adventures in Victoria Falls and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Tours and Activities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li>
                <a href="tel:+263773988190" className="hover:text-white">
                  +263 773 988 190
                </a>
              </li>
              <li>
                <a
                  href="mailto:kunakatadiwanashe@gmail.com"
                  className="hover:text-white break-all"
                >
                  kunakatadiwanashe@gmail.com
                </a>
              </li>
              <li>Victoria Falls, Zimbabwe</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold">Follow Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#cc9933]/30 pt-4 text-center text-xs text-white/80">
          2025 Aura Safaris. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer

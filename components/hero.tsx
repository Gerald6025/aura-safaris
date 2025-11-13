"use client"
import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="w-full min-h-[70vh] md:h-screen bg-hero bg-cover bg-center flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 bg-[url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1762169214/hero_q4kkyc.jpg)]">
      <h1 className="mt-12 sm:mt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway  text-center font-bold max-w-5xl text-white"> Where Every Destination Becomes an Experience.</h1>
      <p className=" font-regular  text-sm sm:text-base md:text-lg text-center max-w-2xl text-white">
        Explore Africa’s heart through authentic safaris, breathtaking adventures, and cultural moments you’ll never forget.
      </p>

    <div className='flex flex-col sm:flex-row gap-3 sm:gap-5'>

    <button className="bg-[#CC9933] text-white py-3 px-6 sm:px-8 rounded-[10px] w-full sm:w-auto text-sm sm:text-base"><Link href="/">Explore Tour</Link></button>
     <button className="bg-white text-black py-3 px-6 sm:px-8 rounded-[10px] w-full sm:w-auto border-2 border-[#CC9933] text-sm sm:text-base"><Link href="/">Book Now</Link></button>

      </div>
    </div>
  )
}


export default Hero
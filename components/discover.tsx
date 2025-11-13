"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Discover = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({})
  return (
    <div className="w-full h-auto ">
      <div className='w-full h-[400px] flex flex-col pt-20 items-center gap-1 '>
  <p className='w-[147px] h-[29px]  text-[16px]'> Discover Our World</p>
  <h1 className='w-full max-w-4xl px-4 text-center font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Featured Experiences</h1>
    <p className='w-full max-w-md px-4 text-center text-[14px] sm:text-[16px] text-black'> Choose from our curated selection of unforgettable safari adventures</p>

     <div className=' w-[200px] h-0.5 bg-[#cc9933] mt-5'></div>
        
      </div>

      <div className='px-12 md:gap-5 gap-5 mx-auto grid md:grid-cols-4  grid-col-1 -mt-20 '>
        {[
          {
            src: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260482/f4cdd9a4fb0f6f53401b6acc25b2400b35201a23_xn4aot.jpg",
            hoverSrc: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260483/15e26f6f2c18254d07d53d876439e7281ceca456_uo6vsd.png",
            title: "Wildlife Safaris",
            description: "Experience breathtaking game drives through Hwange Chobe and Zambezi National Parks.",
          },
          {
            src: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260485/1dd5a89022f54842e3d701e5c788d31af5f0142b_zemmzy.png",
            hoverSrc: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260825/9d29da193898b4e99e4e13bb85c99c4fe52489eb_ve6ups.png",
            title: "Victoria Falls Tours",
            description: "Explore the majestic Victoria Falls with guided tours, helicopter flights, and sunset cruises.",
          },
          {
            src: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260484/ebaa1f7eeaaf73d0174528811c13f2b6e23178dc_wmchcq.png",
            hoverSrc: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260484/792dfad461b75e89a2b3a10f6fd3c4dbc8b38a07_pbt7eu.png",
            title: "Adventure Activities",
            description: "Thrilling experiences including quad biking, white-water rafting, bungee jumping, and more.",
          },
          {
            src: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260485/a31aa349b7b264aa238d10f1319c06760e4dc0e0_dx8cok.png",
            hoverSrc: "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762260484/792dfad461b75e89a2b3a10f6fd3c4dbc8b38a07_pbt7eu.png",
            title: "Luxury Packages",
            description: "Premium safari experiences with private tours, honeymoon packages, and exclusive lodge stays.",
          },
        ].map((card, idx) => (
          <div key={idx} className='flex flex-col group'>
            <div className='relative overflow-visible rounded-lg h-[330px]'>
              <div className='group/image relative h-full overflow-hidden cursor-pointer rounded-lg'>
                <Image
                  src={card.src}
                  alt={`Safari Image ${idx + 1}`}
                  width={300}
                  height={500}
                  className='absolute inset-0 h-full w-full rounded-lg object-cover transition-opacity duration-[2500ms] ease-in-out opacity-100 group-hover/image:opacity-0'
                />
                <Image
                  src={card.hoverSrc}
                  alt={`Safari Image Hover ${idx + 1}`}
                  width={300}
                  height={500}
                  className='absolute inset-0 h-full w-full rounded-lg object-cover transition-opacity duration-[2500ms] ease-in-out opacity-0 group-hover/image:opacity-100'
                />
              </div>
              <div
                className={`pointer-events-auto absolute left-1/2 bottom-0 -translate-x-1/2 transition-all duration-500 ease-out ${open[idx] ? 'opacity-100 translate-y-1/2' : 'opacity-0 translate-y-[70%]'} `}
                onClick={() => setOpen((o) => ({ ...o, [idx]: false }))}
              >
                <div className='bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl ring-1 ring-black/5 p-4 sm:p-5 w-[260px] text-center'>
                  <div className='text-[18px] font-semibold text-gray-900 leading-snug'>
                    {card.title}
                  </div>
                  <p className='mt-2 text-xs leading-relaxed text-black'>
                    {card.description}
                  </p>
                  <button
                    type='button'
                    className='mt-3 mx-auto inline-flex items-center justify-center rounded-md bg-[#cc9933] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#b3832b] transition-colors shadow-sm'
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book this Activity
                  </button>
                </div>
              </div>
            </div>
            <button
              type='button'
              onClick={() => setOpen((o) => ({ ...o, [idx]: !o[idx] }))}
              className={`mt-3 flex w-full items-center justify-between text-sm font-medium text-gray-900 hover:text-[#cc9933] transition-colors ${open[idx] ? 'opacity-0 pointer-events-none h-0 overflow-hidden m-0' : ''}`}
            >
              <span className='transform transition-transform duration-500 ease-out group-hover:translate-y-1'>{card.title}</span>
              <svg
                className={`h-[26px] w-[26px] transform transition-transform duration-500 ease-out ${open[idx] ? 'rotate-180 text-[#cc9933]' : 'rotate-0'} group-hover:-translate-y-1`}
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clipRule='evenodd' />
              </svg>
            </button>
          </div>
        ))}
      </div> 

      
    </div>
  )
}

export default Discover

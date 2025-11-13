"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    text:
      "Aura Safaris made our Victoria Falls trip absolutely unforgettable! The game drive was spectacular, and our guide was incredibly knowledgeable. Highly recommended!",
    avatar:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762348624/62ee5263b3988d8feae2db17bccd20088eb9d3e8_c17w2h.png",
  },
  {
    name: "Michael Chen",
    country: "Singapore",
    text:
      "From booking to the actual experience, everything was seamless. The boat cruise at sunset was magical, and the adventure activities were thrilling. Will definitely return!",
    avatar:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762348627/2aec403de7b04aaf37a38c24308b7ea18411f2c4_nhbkvi.png",
  },
  {
    name: "Emma Williams",
    country: "Australia",
    text:
      "The luxury package exceeded all expectations. Professional service, stunning locations, and memories that will last a lifetime. Thank you Aura Safaris!",
    avatar:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762348626/f8d23771c33adf6c6a2f492247ffd8ae9f74d329_k6yufg.png",
  },
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    text:
      "Aura Safaris made our Victoria Falls trip absolutely unforgettable! The game drive was spectacular, and our guide was incredibly knowledgeable. Highly recommended!",
    avatar:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1762348624/2c58331b5abff8a19d42a8db228cbeaf3b00f32e_flvtho.png",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full  py-20 h-auto">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-[14px] text-black">Your Journey, Our Passion</p>
          <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-black">
            What Our Guest Say
          </h2>
          <p className="text-[15px] text-black">Real experiences from real travelers</p>
          <div className="h-0.5 w-[200px] bg-[#cc9933] mt-4" />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative">
          
              <div className="absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 h-14 w-14 sm:h-20 sm:w-20 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                <Image
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

        
              <div className="rounded-xl border border-[#cc9933]  bg-white p-6 sm:p-8 pl-20 sm:pl-24 flex flex-col justify-center">
                <div className="text-[18px] sm:text-[20px] font-semibold text-black leading-tight">
                  {t.name}
                </div>
                <div className="text-[14px] sm:text-[16px] text-black -mt-0.5">{t.country}</div>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-black">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

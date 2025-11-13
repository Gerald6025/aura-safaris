"use client";
import React from "react";
import { FaLock, FaCompass, FaHandsHelping, FaUserTie } from "react-icons/fa";

const features = [
  {
    title: "Safety Guaranteed",
    description: "Professional guides and top safety standards",
    icon: (
      <FaLock className="h-12 w-12 text-[#cc9933] hover:text-black group-hover:text-black transition-all duration-500 ease-out transform group-hover:-translate-y-1" />
    ),
  },
  {
    title: "Best Locations",
    description: "Access to premium safari destinations",
    icon: (
      <FaCompass className="h-12 w-12 text-[#cc9933] hover:text-black group-hover:text-black transition-all duration-500 ease-out transform group-hover:-translate-y-1" />
    ),
  },
  {
    title: "Personalized Service",
    description: "Tailored experiences for every traveler",
    icon: (
      <FaHandsHelping className="h-12 w-12 text-[#cc9933] hover:text-black group-hover:text-black transition-all duration-500 ease-out transform group-hover:-translate-y-1" />
    ),
  },
  {
    title: "Expert Guides",
    description: "Experienced local guides with deep knowledge",
    icon: (
      <FaUserTie className="h-12 w-12 text-[#cc9933] hover:text-black group-hover:text-black transition-all duration-500 ease-out transform group-hover:-translate-y-1" />
    ),
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-white mt-10  h-auto">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-[14px] text-black">Your Journey, Our Passion</p>
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold tracking-tight text-black">
            Why choose Aura Safaris
          </h2>
          <p className="text-[15px] text-black">
            Your trusted partner for African adventures
          </p>
          <div className="h-0.5 w-[200px] bg-[#cc9933] mt-4" />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-80 gap-10 px-4 justify-items-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer rounded-xl border border-gray-200 flex items-center justify-center flex-col bg-white p-6 w-[330px] h-[300px] shadow-[0_6px_0_rgba(0,0,0,0.2)] hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)] transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-[21px] font-semibold text-black w-[250px] h-[29px] text-center transform transition-transform duration-500 ease-out group-hover:translate-y-1">
                {item.title}
              </h3>
              <p className="mt-2 text-[16px] leading-6 text-center transform transition-transform duration-500 ease-out group-hover:translate-y-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

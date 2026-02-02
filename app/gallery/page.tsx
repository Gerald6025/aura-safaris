"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/800x600/?safari",
  "https://source.unsplash.com/random/800x600/?lion",
  "https://source.unsplash.com/random/800x600/?elephant",
  "https://source.unsplash.com/random/800x600/?giraffe",
  "https://source.unsplash.com/random/800x600/?zebra",
  "https://source.unsplash.com/random/800x600/?rhino",
  "https://source.unsplash.com/random/800x600/?cheetah",
  "https://source.unsplash.com/random/800x600/?buffalo",
];

const imagesPerPage = 4;

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentImages.map((src, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Gallery image ${startIndex + index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded ${
              page === currentPage
                ? "bg-[#cc9933] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </main>
  );
}

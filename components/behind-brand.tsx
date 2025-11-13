import Image from "next/image";

export default function BehindBrand() {
  return (
    <section className="w-full py-20 text-black ">
      <div className="w-full  px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="text-sm text-black">Where the Spirit of Africa Comes Alive</p>
          <h2 className=" text-black font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">Behind the Brand</h2>
          <p className="text-sm sm:text-base text-black/80">Discover the spirit behind Aura Safaris</p>
          <div className="w-40 h-0.5 bg-[#cc9933] mt-4" />
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-16 items-start ">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Story</h3>
              <p className="text-black/80">
                Aura Safaris is a premier travel and adventure operator specializing in unforgettable African safari experiences. Based in the heart of Victoria Falls, Zimbabwe, we have been providing tourists with seamless, safe and exciting travel experiences for years.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#cc9933]/10 text-[#cc9933]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm-1.1 14.2-3.6-3.6 1.4-1.4 2.2 2.2 4.9-4.9 1.4 1.4-6.3 6.3z"/></svg>
                </span>
                <div>
                  <h4 className="font-semibold">Our Purpose</h4>
                  <ul className="mt-2 space-y-1 text-black/80 text-sm">
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Create authentic, soulful safari experiences that go beyond sightseeing</li>
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Connect travelers with nature, people, and culture</li>
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Promote responsible and sustainable tourism that uplifts local communities</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#cc9933]/10 text-[#cc9933]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14h-2v-2h2Zm0-4h-2V6h2Z"/></svg>
                </span>
                <div>
                  <h4 className="font-semibold">What Makes Us Different</h4>
                  <ul className="mt-2 space-y-1 text-black/80 text-sm">
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Personalized adventures — designed around you and your interests</li>
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Local expertise — guided by those who call Africa home</li>
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Heartfelt hospitality — every guest is part of the Aura family</li>
                    <li className="flex gap-2"><span className="text-[#cc9933]">•</span>Sustainability first — protecting wildlife and supporting local life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-4 h-[500px]">
              <div className="relative h-full overflow-hidden rounded-xl col-span-3">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1762780860/d4197a309638f3f048a7475d3e8ba2edc769e510_f1r4ss.png"
                  alt="Giraffe on safari"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 h-full col-span-2">
                <div className="relative flex-1 overflow-hidden rounded-xl">
                  <Image
                    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1762780850/2c6e370482ff462cdadc7d19c12b490a11d44081_wz7abq.jpg"
                    alt="Safari vehicle"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-xl">
                  <Image
                    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1762780851/f3c80a66fe14371ada2c5e9dac124257511d0cfa_ldo3t5.png"
                    alt="Savannah path"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

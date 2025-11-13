import Image from "next/image";
import Hero from "@/components/hero";
import Discover from "@/components/discover"
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Discover/>
      <WhyChoose/>
      <Testimonials/>
    </div>
  );
}
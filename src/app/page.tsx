import Image from "next/image";
import HeroSection from "@/components/landing-page/hero";
import SectionOne from "@/components/landing-page/sectionOne";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <SectionOne />
    </div>
  );
}

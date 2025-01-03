import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";


function HeroSection() {
  return (
    <section>
      <div className="max-w-screen-lg m-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:text-left text-center">
            <h1 className="text-6xl playfairdisplay font-semibold text-[#333333]">Flowers, what the world needs </h1>
            <p className="text-[#666666] lora">Browse between hounders of flowers</p>
            <Button className="bg-[#FF8F52] poppins transform transition-all duration-300 hover:brightness-110 hover:text-[#D7C0D0] rounded-full w-24 hover:bg-[#3A6351]">Browse</Button>
          </div>
          <div className="m-auto">
            <Image src="/images/heroflower.png" alt="flower" width={500} height={500} className="brightness-110"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

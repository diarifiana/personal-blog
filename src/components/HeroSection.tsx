import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import PaginationHero from "./PaginationHero";

const HeroSection = () => {
  return (
    <div className="px-12 py-12 grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-3xl oxanium-800 pb-6  text-[#DB0002]">Beyond the Finish Line, Towards a Greener Future</h1>
        <p className="pb-12 text-xl">This is your go-to spot with friendly guide to all the fast-paced action and drama of Formula 1. We break down the races, tell you who's moving where in the driver world, and explain the tech stuff without the jargon. We'll give you the inside scoop, so you always know what's happening on and off the track.</p>
        <Button className="bg-[#DB0002]">Read More</Button>
      </div>
      <div className="m-auto">
        <Image src="/ferrari.png" alt="image" width={621} height={480} className="rounded-2xl"/>
      </div>

      <div className="col-span-2 flex justify-center pt-8">
        {" "}
        <PaginationHero />
      </div>
    </div>
  );
};

export default HeroSection;

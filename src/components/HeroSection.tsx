import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Pagination } from "./ui/pagination";

const HeroSection = () => {
  return (
    <div className="bg-[#E9F3FE] p-12 grid grid-cols-2 grid-rows-2">
      <div>
        <h1>Title</h1>
        <p>About the blog</p>
        <Button>Read More</Button>
      </div>
      <div className="bg-black m-auto">
        <Image src="/image-hero.jpg" alt="image" width={621} height={480} />
      </div>
      <div className="bg-black">
      <Pagination />
      </div>
      
    </div>
  );
};

export default HeroSection;

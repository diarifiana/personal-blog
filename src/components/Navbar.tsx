import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 px-12">
      {/* logo */}
      <div className="content-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>

      {/* menu */}
      <div className="flex justify-end items-center gap-4">
        <Button variant="link">Posts</Button>
        <Button variant="link">Categories</Button>
        <Button className="bg-[#DB0002]">About</Button>
      </div>
    </div>
  );
};

export default Navbar;

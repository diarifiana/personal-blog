import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 bg-[#E9F3FE] p-12">
      {/* logo */}
      <div className="flex">
        <div className="content-center">Logo</div>

        <div className="grid grid-rows-2">
          <div>Brand</div>
          <div>Brand Tagline</div>
        </div>
      </div>

      {/* menu */}
      <div className="flex justify-end items-center">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </div>
  );
};

export default Navbar;

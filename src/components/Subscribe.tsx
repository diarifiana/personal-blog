import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  return (
    <div className="px-12 py-24 justify-items-center">
      <h1 className="text-center pb-8 text-xl text-[36px]">Get Exclusive F1 Insights</h1>

      <div className="flex gap-4">
        <Input />
        <Button className="bg-[#DB0002]">Subscribe</Button>
      </div>
    </div>
  );
};

export default Subscribe;

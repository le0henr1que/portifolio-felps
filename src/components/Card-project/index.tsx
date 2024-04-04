import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

interface ProjectProps {
  name: string;
  description: string;
  banner: any;
}

export default function CardProject({
  name,
  description,
  banner,
}: ProjectProps) {
  return (
    <div className="grid p-16 gap-16 w-[347px] h-[488px]">
      <div className="bg-black w-[315px] h-[226px]">
        <img src={banner} alt={name} />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="w-full primary-heading-sm text-start">{name}</div>
        <div className="w-full text-16px text-start">{description}</div>
      </div>
    </div>
  );
}

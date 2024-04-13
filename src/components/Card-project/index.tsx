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
    <div className="grid p-16 gap-16 card-project-responsive w-[347px] h-[auto]">
      <div className="bg-[#D9D9D9] w-full h-[226px] rounded-8">
        {/* <img src={banner} alt={name} /> */}
      </div>

      <div className="flex justify-between flex-col flex-grow">
        <div className="flex flex-col justify-start items-start">
          <div className="w-full secondary-heading-sm text-start">{name}</div>
          <div className="w-full text-start body-regular-md">{description}</div>
        </div>

        <div className="w-full ">
          <button className="btn-primary large">Visualizar Case</button>
        </div>
      </div>
    </div>
  );
}

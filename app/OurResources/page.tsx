import Image from "next/image";
import React from "react";
import image from "@/public/CCCMIIIMAGES/dl.beatsnoop.com-3000-xglQzEHI0O copy.jpg";
import { ResourceCard } from "./_components/ResourceCard";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="px-4 lg:px-8">
      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII IMAGE"
          src={image}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="">
        <div className="w-full">
          <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
            Our resources
          </div>
        </div>

        <div className="h-[1px] bg-black w-full my-10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 mb-4">
        {[1, 2, 3, 4].map((resource, i) => (
          <ResourceCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default page;

import Image from "next/image";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import image from "@/public/10003.jpg";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="w-full flex flex-col lg:px-8 text-white pt-6">
      <div className="bg-black p-3 pb-6">
        <h3 className="text-2xl md:text-3xl xl:text-5xl uppercase tracking-tight ">
          connecting and collaborating
        </h3>

        <div className="w-full flex  mt-20">
          <div className="w-full md:w-[70%] xl:w-[50%] text-base lg:text-xl font-medium">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="flex mt-4 gap-x-2 items-center uppercase font-semibold text-base lg:text-xl">
              <PiArrowRightThin />
              <h2 className="text-xl">explore sessions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[350px]">
        <Image
          src={image}
          alt="brandservices image"
          fill
          className="object-cover object-center "
        />
      </div>
    </div>
  );
};

export default Experience;

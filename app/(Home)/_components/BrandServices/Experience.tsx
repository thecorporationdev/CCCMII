import Image from "next/image";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import image from "@/public/10004.jpg";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="w-full flex flex-col lg:px-8 text-white pt-6">
      <div className="bg-black p-6 flex  flex-col gap-y-4">
        <h3 className="text-xl lg:text-3xl uppercase font-semibold">
          co-creating a new design frame
        </h3>

        <div className="w-full flex">
          <div className="w-full  font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Atque cumque a
              eius. Cupiditate a nobis pariatur blanditiis ut corrupti placeat
              dignissimos atque. Minus, assumenda molestias? Hic dolores quasi
              rem ipsam.
            </p>
            <div className="flex  gap-x-2 items-center uppercase font-semibold text-base mt-8">
              <PiArrowRightThin />
              <h2 className="">explore sessions</h2>
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

import Image from "next/image";
import React from "react";
import image from "@/public/10001.jpg";

type Props = {};

const HeroGrid = (props: Props) => {
  return (
    <div className="border-b-[1px] border-black pb-10 ">
      <div className="flex gap-x-6 lg:px-6 flex-col gap-y-6 ">
        {/* <div className="flex flex-col gap-y-6 w-full xl:w-[65%] ContainerPadding">
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
        </div>
        <div className="hidden lg:flex gap-y-6 w-full flex-col flex-1 ContainerPadding">
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
          <div className="h-[350px] lg:h-[400px] bg-gray-200"></div>
        </div> */}

        <div className="flex flex-col-reverse xl:flex-row w-full gap-x-4 gap-y-2 ">
          <div className="h-[350px] lg:h-[400px] bg-gray-200 w-full xl:w-[65%] relative">
            <Image
              src={image}
              alt="CCCMII hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="h-[350px] xl:h-[300px] bg-gray-200 w-full xl:flex-1">
            text here
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row w-full gap-x-4 gap-y-2 ">
          <div className="h-[350px] lg:h-[400px] bg-gray-200 w-full xl:w-[65%] relative">
            <Image
              src={image}
              alt="CCCMII hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="h-[350px] xl:h-[300px] bg-gray-200 w-full xl:flex-1">
            {" "}
            text here
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex-row w-full gap-x-4 gap-y-2 ">
          <div className="h-[350px] lg:h-[400px] bg-gray-200 w-full xl:w-[65%] relative">
            <Image
              src={image}
              alt="CCCMII hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="h-[350px] xl:h-[300px] bg-gray-200 w-full xl:flex-1">
            text here
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;

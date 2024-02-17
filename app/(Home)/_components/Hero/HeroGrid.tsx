import Image from "next/image";
import React from "react";
import image from "@/public/10001.jpg";
import { PiArrowRightThin } from "react-icons/pi";

type Props = {};

const HeroGrid = (props: Props) => {
  return (
    <div className="border-b-[1px] border-black pb-10 ContainerPadding">
      <div className="flex gap-x-6 lg:px-6 flex-col gap-y-6  ">
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
          <div className="h-[350px] xl:h-[300px] bg-[#f89f2b] relative w-full xl:flex-1 text-white">
            <div className="w-full pt-8 px-5  pb-4">
              <div className="flex">
                <div className="w-full  font-semibold text-xl  uppercase">
                  30+ panelists and 300 invited attendees
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <div className="w-full font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quidem repudiandae
                </div>
              </div>

              <div className="flex mt-4 gap-x-2 items-center uppercase absolute bottom-4 font-semibold text-base">
                <PiArrowRightThin />
                <h2 className="">read more</h2>
              </div>
            </div>
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
          <div className="h-[350px] xl:h-[300px] bg-[#E53F71] relative w-full xl:flex-1 text-white">
            <div className="w-full pt-8 px-5  pb-4">
              <div className="flex">
                <div className="w-full  font-semibold text-xl  uppercase">
                  30+ panelists and 300 invited attendees
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <div className="w-full font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quidem repudiandae
                </div>
              </div>

              <div className="flex mt-4 gap-x-2 items-center uppercase absolute bottom-4 font-semibold text-base">
                <PiArrowRightThin />
                <h2 className="">read more</h2>
              </div>
            </div>
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
          <div className="h-[350px] xl:h-[300px] bg-[#9C3588] relative w-full xl:flex-1 text-white">
            <div className="w-full pt-8 px-5  pb-4">
              <div className="flex">
                <div className="w-full  font-semibold text-xl  uppercase">
                  30+ panelists and 300 invited attendees
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <div className="w-full font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quidem repudiandae
                </div>
              </div>

              <div className="flex mt-4 gap-x-2 items-center uppercase absolute bottom-4 font-semibold text-base">
                <PiArrowRightThin />
                <h2 className="">read more</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;

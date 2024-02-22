import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Readmore from "./Readmore";

type Props = {
  image: StaticImageData;
  coursetitle: string;
  courseblurb: string;
  color: string;
  slug: string;
};

export const CourseItem = (props: Props) => {
  const { image, coursetitle, courseblurb, color, slug } = props;
  return (
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

      <div
        className={cn(
          `h-[350px] xl:h-[300px]  relative w-full xl:flex-1 text-white  ${color === "bg-pink" ? "bg-pink" : ""} ${color === "bg-orange" ? "bg-orange" : ""} ${color === "bg-purple" ? "bg-purple" : ""} `
        )}
      >
        <div className="w-full pt-8 px-5  pb-4">
          <div className="flex">
            <div className="w-full  font-semibold text-xl  uppercase">
              {coursetitle}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="w-full font-semibold line-clamp-3">
              {courseblurb}
            </div>
          </div>
          <Readmore slug={slug} />
        </div>
      </div>
    </div>
  );
};

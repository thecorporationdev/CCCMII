"use client";

import Image from "next/image";
import React from "react";
import image from "@/public/CCCMIIIMAGES/ARTICLE2.jpg";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

export const ResourceCard = (props: Props) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col lg:px-8 pt-6 text-white">
      <div className="bg-purple p-6 flex  flex-col gap-y-4 ">
        <h3 className="text-xl lg:text-3xl uppercase font-semibold">
          lorem lorem
        </h3>

        <div className="w-full flex flex-col">
          <div className="w-full  font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, facere! Magnam ut voluptate adipisci delectus natus
              consequuntur quae voluptatibus id deleniti enim, nisi labore
              minima omnis modi a illo veniam!{" "}
            </p>
          </div>
          <div
            className="flex mt-8 gap-x-2 items-center uppercase font-semibold text-base cursor-pointer "
            onClick={() => router.push(`/OurResources/93030039`)}
          >
            <ArrowRight size={20} />
            <h2 className="">explore resources</h2>
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

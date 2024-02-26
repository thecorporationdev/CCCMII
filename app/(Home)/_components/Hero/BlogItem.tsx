"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Readmore from "./Readmore";
import Reveal from "@/Animations/Reveal";

type Props = {
  image: StaticImageData;
  coursetitle: string;
  courseblurb: string;
  color: string;
  slug: string;
};

export const BlogItem = (props: Props) => {
  const { image, coursetitle, courseblurb, color, slug } = props;
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const img = imgRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      img,
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      }
    );
  }, []);

  return (
    <Reveal>
      <div className="flex flex-col-reverse xl:flex-row w-full gap-x-4 gap-y-2">
        <div className="h-[350px] lg:h-[500px] overflow-hidden w-full xl:w-[65%] ">
          <div className=" h-full w-auto xl:w-full relative">
            <Image
              src={image}
              alt="CCCMII hero image"
              fill
              className="object-cover"
              priority
              ref={imgRef}
            />
          </div>
        </div>

        <div
          className={cn(
            `h-auto xl:h-[400px]  relative w-full xl:flex-1 text-white  
          ${color === "bg-pink" ? "bg-pink" : ""} 
          ${color === "bg-orange" ? "bg-orange" : ""} 
          ${color === "bg-purple" ? "bg-purple" : ""}`
          )}
        >
          <div className="w-full pt-8 px-5 ">
            <Reveal delay={0.2}>
              <div className="flex">
                <div className="w-full font-semibold text-xl  uppercase">
                  {coursetitle}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex justify-end mt-4">
                <div className="w-full font-semibold">{courseblurb}</div>
              </div>
            </Reveal>
            <Readmore slug={slug} />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

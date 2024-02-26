"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  className?: string;
  image: StaticImageData;
};

const ParallaxImage = ({ className, image }: Props) => {
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
        yPercent: -10,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      }
    );
  }, []);
  return (
    <div
      className={cn(
        ` w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8 overflow-hidden ${className}`
      )}
    >
      <div className="h-full w-auto xl:w-full relative ">
        <Image
          alt="CCCMII IMAGE"
          ref={imgRef}
          src={image}
          fill
          className="h-full w-full object-cover object-top origin-center scale-125"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ParallaxImage;

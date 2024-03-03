"use client";
import React from "react";
import Reveal from "@/Animations/Reveal";
import { TextGenerateEffect } from "@/Animations/Text-generate";
import { Parallax } from "@/Animations/Parallax";

const HeroText = () => {
  return (
    <div className="text-[26px] max-lg:font-semibold sm:text-5xl font-medium lg:px-8 mb-16 lg:mb-24 max-lg:px-6 tracking-tight flex justify-end">
      <div className="w-full lg:w-[65%] leading-snug">
        {/* <Reveal>
          <div className="">
            <span>WELCOME TO THE OFFICIAL WEBSITE OF THREE</span>
            <span> MET INTERNATIONAL INSTITUTE OF MEDIATION</span>
            <span>
              C&apos;s,NEGOTIATION, COUNSELING AND CONCILIATION (CCCMII)
            </span>
          </div>
        </Reveal> */}
        <Parallax speed={0.5}>
          <TextGenerateEffect words="WELCOME TO THE OFFICIAL WEBSITE OF THREE C'S MET INTERNATIONAL INSTITUTE OF MEDIATION, NEGOTIATION COUNSELING AND CONCILIATION (CCCMII)" />
        </Parallax>
      </div>
    </div>
  );
};

export default HeroText;

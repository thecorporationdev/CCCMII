"use client";
import PrivacyPolicy from "../../Data/PrivacyPolicy.mdx";
import Image from "next/image";
import React from "react";
import privacypolicy from "@/public/CCCMIIIMAGES/privacypolicy.jpg";
import Reveal from "@/Animations/Reveal";

const page = () => {
  return (
    <section className="">
      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII privacypolicy IMAGE"
          src={privacypolicy}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="px-4 lg:px-8">
        <div className="">
          <div className="w-full">
            <Reveal>
              <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
                privacy policy
              </div>
            </Reveal>
          </div>

          <div className="h-[1px] bg-black w-full my-10"></div>
        </div>
      </div>
      <div className="w-full flex justify-end mb-10">
        <div className="w-ful lg:w-1/2">
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  );
};

export default page;

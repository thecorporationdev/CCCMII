"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/WhiteLogo.svg";
import FooterNav from "./FooterNav";
import FooterContent from "./FooterContent";
import Link from "next/link";
import Reveal from "@/Animations/Reveal";

type Props = {};

const FooterMain = (props: Props) => {
  return (
    <footer className=" py-4 w-full  ContainerPadding bg-purple pt-10 text-white px-4 ">
      <div className="container">
        <Reveal>
          <div className="flex gap-x-4 items-center">
            <div className="uppercase md:font-semibold lg:w-[10%] underline underline-offset-4 text-xl md:text-2xl">
              <Image
                src={logo}
                alt="CCCMII logo"
                height={300}
                width={200}
                priority
                className="object-cover"
              />
            </div>

            <FooterNav />
          </div>
        </Reveal>

        <FooterContent />
        <div className=" flex flex-col lg:flex-row justify-between py-5 lg:items-center font-semibold text-[14px] uppercase gap-y-3">
          <Reveal delay={0.3}>
            <div>&copy; Copyright CCCMII {new Date().getFullYear()}</div>
          </Reveal>

          <Reveal delay={0.4}>
            <Link href={"/OurPolicies"} className=" hover:underline lg:-ml-16">
              <span>privacy policy</span>
            </Link>
          </Reveal>

          <Reveal delay={0.5}>
            <span className="hover:underline transition duration-300">
              <a href="https://theaustere.xyz/" target="_blank">
                site by Austere
              </a>
            </span>
          </Reveal>
        </div>
      </div>

      <div className="h-[30vh] w-full"></div>
    </footer>
  );
};

export default FooterMain;

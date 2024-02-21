"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, stagger } from "framer-motion";
import Image from "next/image";
import logo from "@/public/LOGO2.svg";

import { XMarkIcon } from "@heroicons/react/24/outline";

const navigationLinks = [
  { id: 1, name: " our Agency", href: "/" },
  { id: 1, name: " our Economy", href: "/" },
  { id: 1, name: " our demography", href: "/" },
  { id: 1, name: " our research", href: "/" },
  { id: 1, name: " our contacts", href: "/" },
  { id: 1, name: " our ", href: "/" },
];
interface MobileNavProps {
  hideModalHandler: (barstate: boolean) => void;
  barstate: boolean;
}

const Mobilenav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler, barstate } = props;

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "circOut",
        duration: 1,
        delay: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 pb-8 px-5 overflow-hidden  text-black text-2xl lg:text-4xl  h-screen w-screen bg-green
         z-[40000000] text-center bg-white"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.4, ease: "circIn" }}
        exit="exit"
      >
        <div className="h-full w-full flex flex-col items-center   ">
          <div
            className={`flex justify-end bg-transparent items-center fixed font-semibold z-[100]  w-full  px-4 h-fit py-3 transition-all duration-1000 `}
          >
            {/* <motion.div
              className="cursor-pointer"
              initial={{ opacity: 0, rotate: 2 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              exit={{ opacity: 0, transition: { delay: 0.4 } }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              <Image
                src={logo}
                alt="BSBS logo"
                className="cursor-pointer"
                height={200}
                width={150}
                priority
              />
            </motion.div> */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              exit={{ opacity: 0, transition: { delay: 0.4 } }}
              className="cursor-pointer"
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              <XMarkIcon className="h-20 w-20 lg:h-24 lg:w-24 stroke-[0.4px]" />
            </motion.p>
          </div>
          <ul className=" w-full flex flex-col max-lg:mt-56 items-center gap-y-8 lg:px-5  py-4 uppercase font-bold  text-2xl lg:text-[40px] leading-[30px] mt-36 lg:mt-40 ">
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.2 }}
                exit={{ opacity: 0, transition: { delay: 0.6 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Our Home
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/OurAgency" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0, transition: { delay: 0.7 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our Agency
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                exit={{ opacity: 0, transition: { delay: 0.6 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our Courses
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                exit={{ opacity: 0, transition: { delay: 0.5 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our certifications
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                exit={{ opacity: 0, transition: { delay: 0.4 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our blog
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our contacts
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                exit={{ opacity: 0, transition: { delay: 0.2 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our policies
              </motion.li>
              {/* <div className="w-full lg:w-[19rem]  bg-white h-[1px] mt-1"></div> */}
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Mobilenav;

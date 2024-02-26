"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroText = () => {
  const firstTextref = useRef(null);
  const secondTextref = useRef(null);
  const thirdTextRef = useRef(null);

  const isInview = useInView(firstTextref, { once: false });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview, mainControls]);

  const secondisInview = useInView(secondTextref, { once: false });

  const secondmainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      secondmainControls.start("visible");
    }
  }, [isInview, secondmainControls]);

  return (
    <div className="text-[26px] max-lg:font-semibold sm:text-5xl font-medium lg:px-8 mb-16 lg:mb-24 max-lg:px-6 tracking-tight flex justify-end">
      <div className="hidden lg:block lg:w-[65%] ">
        <motion.span
          ref={firstTextref}
          variants={{
            hidden: { y: 10 },
            visible: { y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial="hidden"
          animate={mainControls}
        >
          WELCOME TO THE OFFICIAL WEBSITE OF THREE
        </motion.span>

        <motion.span
          variants={{
            hidden: { y: 10 },
            visible: { y: 0 },
          }}
          ref={secondTextref}
          transition={{ duration: 0.5, delay: 0.3 }}
          initial="hidden"
          animate={secondmainControls}
        >
          MET INTERNATIONAL INSTITUTE OF MEDIATION
        </motion.span>
        <motion.span
          variants={{
            hidden: { y: 10 },
            visible: { y: 0 },
          }}
          ref={thirdTextRef}
          transition={{ duration: 0.5, delay: 0.4 }}
          initial="hidden"
          animate="visible"
        >
          {" "}
          C&apos;s,NEGOTIATION, COUNSELING AND CONCILIATION (CCCMII)
        </motion.span>
      </div>

      <div className="w-full block lg:hidden">
        WELCOME TO THE OFFICIAL WEBSITE OF THREE C&apos;s MET INTERNATIONAL
        INSTITUTE OF MEDIATION,NEGOTIATION, COUNSELING AND CONCILIATION (CCCMII)
      </div>
    </div>
  );
};

export default HeroText;

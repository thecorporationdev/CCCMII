"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: JSX.Element;
  delay?: number;
};

const Reveal = ({ children, delay }: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 40 },
        visible: { y: 0 },
      }}
      transition={{ duration: 0.7, delay: delay }}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

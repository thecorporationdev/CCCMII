"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: JSX.Element;
  delay?: number;
};

const Reveal = ({ children, delay }: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref);

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
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

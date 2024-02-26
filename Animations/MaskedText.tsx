"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

type Props = {
  phrases: string[];
};

const MaskedText = ({ phrases }: Props) => {
  const body = useRef(null);
  const isInview = useInView(body, { once: true });

  const animate = {
    initial: { y: "100%", opacity: 1 },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 1, delay: 0.1 * i },
    }),
  };

  return (
    <div ref={body} className="m-0 whitespace-no-wrap">
      {phrases?.map((phrase, i) => (
        <div key={i} className="overflow-hidden whitespace-no-wrap ">
          <motion.p
            variants={animate}
            initial="initial"
            animate={isInview ? "open" : ""}
            className="whitespace-no-wrap"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default MaskedText;

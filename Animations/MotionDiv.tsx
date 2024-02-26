"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const MotionDiv = ({ children }: Props) => {
  return <motion.div>{children}</motion.div>;
};

export default MotionDiv;
